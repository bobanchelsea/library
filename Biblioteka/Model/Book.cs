using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteka.Model
{
    public class Book
    {
        [Key]   
        public int Id  { get; set; }

        [Required (ErrorMessage ="Naslov je obavezno polje!")]
        public string Name { get; set; }
        public string Author { get; set; }

        public string ISBN { get; set; }
    }
}
  