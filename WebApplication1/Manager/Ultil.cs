using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Composing;

namespace WebApplication1.Manager
{
    public class Ultil
    {
        public static bool IsMemberExist(string email)
        {
            return Current.Services.MemberService.GetByEmail(email) != null;
        }
    }
}