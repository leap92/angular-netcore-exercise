using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InsuranceController : ControllerBase
    {
        private readonly InsuranceContext _context;

        public InsuranceController(InsuranceContext insuranceContext)
        {
            _context = insuranceContext;
        }


        [HttpPost]
        public async Task<ActionResult<Insurance>> Create(Insurance insurance)
        {
            _context.Insurances.Add(insurance);
            await _context.SaveChangesAsync();

            return CreatedAtAction(null, new { id = insurance.Id }, insurance);
        }
    }
}