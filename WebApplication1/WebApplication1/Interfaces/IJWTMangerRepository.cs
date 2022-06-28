using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.ViewModel;

namespace WebApplication1.Interfaces
{
    public interface IJWTMangerRepository
    {
        Tokens Authenticate(LoginViewModel users);
    }
}
