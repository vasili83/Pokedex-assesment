using Microsoft.AspNetCore.Mvc;

namespace PokedexAPI.Controllers
{
    /// <summary>
    /// Health check endpoint
    /// </summary>
    [Route("api")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        // GET api
        /// <summary>
        /// Check if the API is healthy
        /// </summary>
        /// <returns>Returns "ok" if the API is running</returns>
        [HttpGet]
        public ActionResult<string> Get()
        {
            return Ok("ok");
        }
    }
}
