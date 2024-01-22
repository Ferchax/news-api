using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsAPI.Dtos
{
    public class TopHeadlinesDto
    {
        public string Country { get; set; } = "ar";
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}