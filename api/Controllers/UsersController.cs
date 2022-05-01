using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using api.Models;
using api.Interfaces;
using api.Database;

namespace api.Controllers
{   
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IUserDataHandler handlerOfData = new UserDataHandler();

        // GET: api/Users
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<User> Get()
        {
            return handlerOfData.Select();
        }

        // GET: api/Users/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetUser")]
        public List<User> Get(int id)
        {
            return handlerOfData.SelectById(id);
        }

        // POST: api/Users
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] User user)
        {
            // User newUser = new User() { 
            //     Password = user.Password,
            //     SSN = user.SSN,
            //     FirstName = user.FirstName,
            //     MiddleName = user.MiddleName,
            //     LastName = user.LastName,
            //     Email = user.Email,
            //     StartDate = DateTime.Now,
            //     Salary = user.Salary,
            //     ShiftStart = DateTime.Now,
            //     Birthday = DateTime.Now,
            //     Phone = user.Phone,
            //     URL = user.URL,
            //     Admin = user.Admin,
            //     Username = user.Username,
            //     DepartmentID = user.DepartmentID,
            // };
            handlerOfData.Insert(user);
        }

        // PUT: api/Users/5
        [EnableCors("OpenPolicy")]
        [HttpPut]
        public void Put([FromBody] User user)
        {
            handlerOfData.Update(user);
        }

        // DELETE: api/Users/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            handlerOfData.Delete(id);
        }
    }
}
