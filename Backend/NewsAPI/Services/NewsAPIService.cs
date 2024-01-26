using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NewsAPI.Dtos;
using NewsAPI.Models;

namespace NewsAPI.Services
{
    public class NewsAPIService : INewsAPIService
    {
                private readonly HttpClient _client;
        private readonly IConfiguration _config;
        private readonly string _base_uri;
        private readonly string _language;
        
        public NewsAPIService(IConfiguration config)
        {            
            _config = config;
            _client = new HttpClient();
            _client.DefaultRequestHeaders.Add("user-agent", "News-API-csharp/0.1");
            _client.DefaultRequestHeaders.Add("X-Api-Key", _config.GetSection("NewsAPI:ApiKey").Value);
            _base_uri = _config.GetSection("NewsAPI:BaseUriV2").Value;
            _language = _config.GetSection("NewsAPI:language").Value;
        }

        public async Task<ServiceResponseDto<ApiResponse>> Search(SearchDto search)
        {
            var responseDto = new ServiceResponseDto<ApiResponse>();
            var endpoint = _config.GetSection("NewsAPI:endpoints:0").Value;

            try
            {                
                var uri = $"{_base_uri}{endpoint}?language={_language}" +
                    $"&q={search.Keywords}" +
                    $"&from={search.DateFrom?.ToString("yyyy-MM-dd")}" +
                    $"&to={search.DateTo?.ToString("yyyy-MM-dd")}" +
                    $"&pagesize={search.PageSize}&page={search.Page}";

                var data = await _client.GetFromJsonAsync<ApiResponse>(uri);

                 if(data != null && data.TotalResults > 0) {
                    responseDto.CurrentPage = search.Page;
                    responseDto.Pages = (int)Math.Ceiling(data.TotalResults / (double)search.PageSize);
                }

                responseDto.Data = data;
            }
            catch (Exception ex)
            {
                responseDto.Success = false;
                responseDto.Message = ex.Message;
            }
            
            return responseDto;
        }

        public async Task<ServiceResponseDto<ApiResponse>> TopHeadlines(TopHeadlinesDto topHeadlines)
        {
            var responseDto = new ServiceResponseDto<ApiResponse>();
            var endpoint = _config.GetSection("NewsAPI:endpoints:1").Value;
            
            try
            {                
                var uri = $"{_base_uri}{endpoint}?country={topHeadlines.Country}&pagesize={topHeadlines.PageSize}&page={topHeadlines.Page}";
                var data = await _client.GetFromJsonAsync<ApiResponse>(uri);;

                if(data != null && data.TotalResults > 0) {
                    responseDto.CurrentPage = topHeadlines.Page;
                    responseDto.Pages = (int)Math.Ceiling(data.TotalResults / (double)topHeadlines.PageSize);
                }

                responseDto.Data = data;
            }
            catch (Exception ex)
            {
                responseDto.Success = false;
                responseDto.Message = ex.Message;
            }
            
            return responseDto;
        }
    }
}