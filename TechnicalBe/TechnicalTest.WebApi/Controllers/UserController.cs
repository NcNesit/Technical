using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TechnicalTest.Model.Entities;
using TechnicalTest.Model.Interfaces;

namespace TechnicalTest.WebApi.Controllers
{
    public class UserController : ApiController
    {
        private readonly IUser UserRepository;
        public UserController(IUser UserRepository)
        {
            this.UserRepository = UserRepository;
        }

        [HttpGet]
        [Route("UserController/GetUserById/{id}")]
        public IHttpActionResult Get(int id)
        {
             var user = this.UserRepository.GetUser(id);
            return Ok(user);
        }

        [HttpGet]
        [Route("UserController/GetAllUsers")]
        public IHttpActionResult GetAll()
        {
            var users = this.UserRepository.GetAllUsers();
            return Ok(users);
        }


        [HttpPut]
        [Route("UserController/UpdateUser")]
        public IHttpActionResult Update([FromBody] User user)
        {
            this.UserRepository.UpdateUser(user);
            return Ok();
        }


       
    }
}