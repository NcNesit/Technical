using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechnicalTest.Model.Entities;
using TechnicalTest.Model.Interfaces;
using TechnicalTest.Repository.Data;

namespace TechnicalTest.Repository.Repositories
{
    public class UserRepository : IUser
    {
        

        private TechnicalTestDBEntities db;
        public UserRepository()
        {
            db = new TechnicalTestDBEntities();
        }


        public void CreateUser()
        {
            throw new NotImplementedException();
        }

        public List<User> GetAllUsers()
        {
            List<User> users = new List<User>();
            var usersData = db.Users.ToList();
            usersData.ForEach(u => users.Add(MapUserData(u)));
            return users;
        }

        public User GetUser(int id)
        {
            Users userData = db.Users.Where(u => u.Id == id).FirstOrDefault();
            if (userData != null)
                return MapUserData(userData);
            else return null;
        }

        public void UpdateUser(User user)
        {
            var existingUser = db.Users.Where(u => u.Id == user.UserId).FirstOrDefault();
            if (existingUser != null)
            {
                existingUser.UserName = user.UserName;
                existingUser.LastName = user.LastName;
                existingUser.FirstName = user.FirstName;
                existingUser.PhoneNumber = user.PhoneNumber;
                existingUser.Email = user.Email;
                //existingUser.AddressId = user.AddressId;
                //existingUser.CompanyId = user.CompanyId;      
                db.SaveChanges();
            }
        }

        private User MapUserData(Users userData)
        {
            User user = new User()
            {
                UserId = userData.Id,
                UserName = userData.UserName,
                LastName = userData.LastName,
                FirstName = userData.FirstName,
                Email = userData.Email,
                PhoneNumber = userData.PhoneNumber
            };
            return user;
        }
        
    }
}
