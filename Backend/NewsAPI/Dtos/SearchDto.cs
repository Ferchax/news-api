using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewsAPI.Dtos
{
    public class SearchDto
    {
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }

        [Required(ErrorMessage = "You must provide some keywords for the search.")]
        public string Keywords { get; set; } = string.Empty;

        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}