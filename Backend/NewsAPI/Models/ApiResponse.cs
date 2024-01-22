using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsAPI.Models
{
    public class ApiResponse
    {
        public string Status { get; set; } = string.Empty;
        public int TotalResults { get; set; }
        public List<Article> Articles { get; set; } = new List<Article>();
    }
}