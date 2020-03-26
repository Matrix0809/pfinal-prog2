using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebApplication1.Models
{
    public class Familia
    {

        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Telefono { get; set; }
    }

    class FamiliaDbContext : DbContext
    {
        public DbSet<Familia> Productos { get; set; }
    }
}