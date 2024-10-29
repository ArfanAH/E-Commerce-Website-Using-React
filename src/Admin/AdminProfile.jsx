import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import { IoIosLogOut } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddProduct from './AddProduct';
import Products from './Products';
import Inbox from './Inbox';

function AdminProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div>
      <Header />
     
        <div className='px-10 md:px-20 my-10'>
        {/* Tabs Layout */}
        <Tabs defaultValue="my-profile" className="w-full md:px-10">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger 
              value="my-profile" 
              className="mx-2 px-4 py-2 text-lg font-semibold bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 border rounded-xl transition-colors duration-200"
            >
              My Profile
            </TabsTrigger>
            <TabsTrigger 
              value="products" 
              className="mx-2 px-4 py-2 text-lg font-semibold bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 border rounded-xl transition-colors duration-200"
            >
              Products
            </TabsTrigger>
            <TabsTrigger 
              value="add-product" 
              className="mx-2 px-4 py-2 text-lg font-semibold bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 border rounded-xl transition-colors duration-200"
            >
              Add Product
            </TabsTrigger>
            <TabsTrigger 
              value="inbox" 
              className="mx-2 px-4 py-2 text-lg font-semibold bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 border rounded-xl transition-colors duration-200"
            >
              Inbox
            </TabsTrigger>
          </TabsList>

          {/* Profile Content */}
          <TabsContent value="my-profile">
            <div className="min-h-screen flex flex-col items-center">
              <div className="w-full max-w-lg mx-auto bg-white shadow-lg border rounded-xl p-8 ">
                {/* Profile Section */}
                <div className="flex items-center justify-center mb-6">
                  <FaUserCircle className="text-6xl text-gray-500" />
                </div>
                <h2 className="text-center text-3xl font-semibold text-gray-700 mb-4">
                  Arfan Ahmed
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  Welcome to E-commerce Website Admin Panel. You can manage the platform from here.
                </p>

                {/* Profile Details */}
                <div className="text-center mb-10">
                  <h3 className="text-xl font-medium text-gray-800">Arfan Ahmed</h3>
                  <p className="text-gray-500">Administrator</p>
                  <p className="text-gray-500">admin@example.com</p>
                </div>

                <div className="text-center mb-6">
                  <Link to="/EditProfile">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      Edit Profile
                    </Button>
                  </Link>
                </div>

                {/* Logout Button */}
                <div className="text-center">
                  <Button
                    onClick={handleLogout} 
                    className="border rounded-lg bg-slate-400 hover:shadow-md hover:bg-slate-500"
                  >
                    <IoIosLogOut className='text-black text-lg' />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="products" className="w-full">
            <div className="w-full max-w-7xl mx-auto">
              <Products/>
            </div>
          </TabsContent>

          {/* Add Product Content (Make full width) */}
          <TabsContent value="add-product" className="w-full">
            <div className="w-full max-w-7xl mx-auto">
              <AddProduct />
            </div>
          </TabsContent>

          {/* Inbox Content */}
          <TabsContent value="inbox" className="w-full">
            <div className="w-full max-w-7xl mx-auto">
              <Inbox/>
            </div>
          </TabsContent>
        </Tabs>
        </div>
      
    </div>
  );
}

export default AdminProfile;
