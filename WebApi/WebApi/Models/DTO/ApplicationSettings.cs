using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models.DTO
{
    public class ApplicationSettings
    {
        public string JWT_SecretCode { get; set; }
        public string ClientUrl { get; set; }
    }
}
