using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Insurance
    {
        public int Id { get; set; }
        [Required]
        public int PowerUnits { get; set; }
        [Required]
        public DateTime? ProposedEffectiveDate { get; set; }
        [Required]
        public DateTime? ProposedExpirationDate { get; set; }
        [Required]
        [MaxLength(50)]
        public string BusinessName { get; set; }
        [MaxLength(50)]
        public string BusinessDescription { get; set; }
    }
}