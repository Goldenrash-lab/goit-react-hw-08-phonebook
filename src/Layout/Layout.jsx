import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Box m="10">
        <Breadcrumb color="black" separator="|" fontWeight="medium" fontSize="md">
          <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to="/login">
              Login
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to="/register">
              Register
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to="/contacts">
              Contacts
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
