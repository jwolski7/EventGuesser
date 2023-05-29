using EventGuesserAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EventGuesserAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<HistoricalEvent> HistoricalEvents => Set<HistoricalEvent>();
    }
}
