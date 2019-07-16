import { createAppContainer, createStackNavigator } from 'react-navigation';
import React,{Component} from 'react'
import {AsyncStorage,View} from 'react-native'
import HomeScreen from '../screens/Home/HomeScreen';
import ListScreen from '../screens/List/ListScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import WebView from '../screens/WebView'
import Auth from './authScreen'

export default createAppContainer(
  createStackNavigator({
   Auth,
   Main: HomeScreen,
   List: ListScreen,
   Profile: ProfileScreen,
   Web: WebView
  })
);

