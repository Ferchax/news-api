using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NewsAPI.Dtos;
using NewsAPI.Models;

namespace NewsAPI.Services
{
    public interface INewsAPIService
    {
        public Task<ServiceResponseDto<ApiResponse>> Search(SearchDto search);
        public Task<ServiceResponseDto<ApiResponse>> TopHeadlines(TopHeadlinesDto topHeadlines);
    }
}