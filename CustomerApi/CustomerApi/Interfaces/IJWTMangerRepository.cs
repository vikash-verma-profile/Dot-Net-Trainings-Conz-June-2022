using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApi.ViewModel;

namespace CustomerApi.Interfaces
{
    public interface IJWTMangerRepository
    {
        Tokens Authenticate(LoginViewModel users,bool IsRegister);
    }
}
