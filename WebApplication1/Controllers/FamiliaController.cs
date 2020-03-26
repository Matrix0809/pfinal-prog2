using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class FamiliaController : ApiController
    {
        private FamiliaDbContext db = new FamiliaDbContext();

        // GET: api/Familia
        public IQueryable<Familia> GetProductos()
        {
            return db.Productos;
        }

        // GET: api/Familia/5
        [ResponseType(typeof(Familia))]
        public IHttpActionResult GetFamilia(int id)
        {
            Familia familia = db.Productos.Find(id);
            if (familia == null)
            {
                return NotFound();
            }

            return Ok(familia);
        }

        // PUT: api/Familia/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFamilia(int id, Familia familia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != familia.ID)
            {
                return BadRequest();
            }

            db.Entry(familia).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FamiliaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Familia
        [ResponseType(typeof(Familia))]
        public IHttpActionResult PostFamilia(Familia familia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Productos.Add(familia);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = familia.ID }, familia);
        }

        // DELETE: api/Familia/5
        [ResponseType(typeof(Familia))]
        public IHttpActionResult DeleteFamilia(int id)
        {
            Familia familia = db.Productos.Find(id);
            if (familia == null)
            {
                return NotFound();
            }

            db.Productos.Remove(familia);
            db.SaveChanges();

            return Ok(familia);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FamiliaExists(int id)
        {
            return db.Productos.Count(e => e.ID == id) > 0;
        }
    }
}