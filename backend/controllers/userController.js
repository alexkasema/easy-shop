import User from '../models/userModel.js';
import asyncHandler from '../middleware/asyncHandler.js';


// @desc Auth user & token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.send("Auth user")
});

// @desc Logout user / clear cookie
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.send("Register user")
});

// @desc Auth user & token
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send("Logout user")
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send("get user profile")
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("update user profile")
});

// @desc Get users
// @route GET /api/users/
// @access Private / Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send("get users")
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private / Admin
const getUserByID = asyncHandler(async (req, res) => {
    res.send("get user by ID")
});

// @desc Update user
// @route PUT /api/users/:id
// @access Private / Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send("update user")
});


// @desc Delete user
// @route Delete /api/users/:id
// @access Private / Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send("delete user")
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser,
}