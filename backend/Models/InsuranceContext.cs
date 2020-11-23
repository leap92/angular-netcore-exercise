using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class InsuranceContext : DbContext
    {
        public InsuranceContext(DbContextOptions<InsuranceContext> options) : base(options)
        {

        }

        public DbSet<Insurance> Insurances { get; set; }
    }
}