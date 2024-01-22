using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NewsAPI.Dtos;
using NewsAPI.Services;

namespace NewsAPI.Controllers
{
    [ApiController]
    [Route("api/news")]
    [EnableCors("allowSpecificOrigins")]
    public class NewsAPIController : ControllerBase
    {
        private readonly INewsAPIService _service;

        public NewsAPIController(INewsAPIService service)
        {
            _service = service;
        }

        [HttpGet("top-headlines")]
        public async Task<ActionResult<ServiceResponseDto<object>>> GetTopHeadlines([FromQuery]TopHeadlinesDto topHeadlines)
        {
            return Ok(await _service.TopHeadlines(topHeadlines));
        }
        
        [HttpGet("search")]
        public async Task<ActionResult<ServiceResponseDto<object>>> Search([FromQuery]SearchDto search)
        {
            return Ok(await _service.Search(search));
        }
    }
}