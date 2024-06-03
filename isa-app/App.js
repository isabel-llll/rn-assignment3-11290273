import React from "react";
import { StyleSheet, Image, Text, View, ScrollView, TextInput, Button, FlatList, SafeAreaView } from "react-native";

export default function Task() {
    const tasks = [
      { id: '1', title: '30-minute Home Workout' },
      { id: '2', title: 'Mobile App Project' },
      { id: '3', title: 'Attend Team Meeting' },
      { id: '4', title: 'Read a Romance Novel' },
      { id: '5', title: 'Web Development' },
      { id: '6', title: 'Grocery Shopping' },
      { id: '7', title: 'Clean the House' },
      { id: '8', title: 'Prepare Lunch' },
      { id: '9', title: 'Watch a Movie' },
      { id: '10', title: 'Organize the closet' },
      { id: '11', title: 'Relax' },
      { id: '12', title: 'Study for Exams' },
      { id: '13', title: 'Make Dinner' },
      { id: '14', title: 'Yoga' },
      { id: '15', title: 'Shower & Sleep' },
    ];