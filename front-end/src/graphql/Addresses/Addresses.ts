import { gql } from '@apollo/client'

// Get all addresses
export const GET_ADDRESSES = gql`
 {
  me {
   addresses {
    full_name
    street
    city_area
    governorate
    governorateid
    country
    phone_number
    id
   }
  }
 }
` // End get all addresses

// Add an Address
export const ADD_ADDRESSES = gql`
 mutation ADDADDRESSES(
  $country: String!
  $full_name: String!
  $phone_number: String!
  $street: String!
  $governorate: String!
  $governorateid: ID!
  $city_area: String!
 ) {
  createAddress(
   input: {
    country: $country
    full_name: $full_name
    phone_number: $phone_number
    street: $street
    governorate: $governorate
    governorateid: $governorateid
    city_area: $city_area
   }
  ) {
   id
  }
 }
` //end add an Address

// update an Address
export const UPDATE_ADDRESSES = gql`
 mutation UPDATEADDRESSES(
  $id: ID!
  $country: String!
  $full_name: String!
  $phone_number: String!
  $street: String!
  $governorate: String!
  $governorateid: ID!
  $city_area: String!
 ) {
  updateAddress(
   id: $id
   input: {
    country: $country
    full_name: $full_name
    phone_number: $phone_number
    street: $street
    governorate: $governorate
    governorateid: $governorateid
    city_area: $city_area
   }
  ) {
   id
  }
 }
` // End update an address

// Delete an address
export const DELETE_ADDRESS = gql`
 mutation delete_Address($id: ID!) {
  deleteAddress(id: $id) {
   id
  }
 }
` // End delete an address
