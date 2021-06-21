using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechnicalTest.Model.Entities;

namespace TechnicalTest.Model.Interfaces
{
   public interface IUser
    {
        void CreateUser();
        User GetUser(int id);
        List<User> GetAllUsers();        
        void UpdateUser(User user);
              
    }
}
