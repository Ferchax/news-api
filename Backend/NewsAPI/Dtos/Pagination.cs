using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsAPI.Dtos
{
    public class Pagination
    {
        public int Pages { get; set; }
        public int CurrentPage { get; set; }
    }
}