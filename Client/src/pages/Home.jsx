import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-2 py-20 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-10">
        <div className="mb-10 w-full md:w-2/3 lg:mb-0 lg:w-1/2">
          <img
            className="h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Newsletter"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="text-sm font-bold text-black">
            Meet, chat, and have fun with new people — free!
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black">
            Sign up to start your first chat
          </h2>
          <p className="mt-4 text-gray-600">
            LetsChat helps you find new people nearby who share your interests
            and want to chat now! It's fun, friendly, and free!
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Trusted by over 100,000+ users
            </p>
            <div className="mt-2 flex items-center">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 inline-block">
                <span className="text-sm font-semibold text-gray-800">
                  4.8/5 . 3420 Reviews
                </span>
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <div className="isolate flex -space-x-2">
                <img
                  className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Dan_Abromov"
                />
                <img
                  className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Guillermo_Rauch"
                />
                <img
                  className="relative z-10 inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Lee_Robinson"
                />
                <img
                  className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Delba"
                />
              </div>
              <span className="text-sm font-semibold text-gray-700">
                Join 5000+ Developers
              </span>
            </div>
          </div>
          <form className="mt-6">
            <div className="flex w-full max-w-md flex-col space-y-4">
              <Link to="/signin">
                <h2 className="text-2xl font-bold leading-tight text-black underline">
                  Sign in to your account
                </h2>
              </Link>
            </div>
          </form>
          <p className="mt-2">
            <span className="text-sm text-gray-600">
              By signing up, you agree to our terms of service and privacy
              policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
