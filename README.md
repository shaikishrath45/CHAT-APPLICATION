# CHAT-APPLICATION

*COMPANY*:CODTECH IT SOLUTIONS 

*NAME*: SHAIK ISHRATH

*INTERN ID*:CITS505

*DOMAIN*:FULL STACK WEB DEVELOPMENT

*DURATION*:8 WEEKS

*MENTOR*: NEELA SANTHOSH

### Real-Time Chat Application Using Socket.IO

## Project Overview

This project was developed as part of a web development task focused on implementing real-time communication using Socket.IO. The objective of the task was to build a web-based chat application that allows multiple users to exchange messages instantly without refreshing the page. The project demonstrates the practical implementation of WebSocket-based communication and provides an understanding of how modern real-time messaging applications function.

## Task Description

The task involved creating a Real-Time Chat Application using Node.js, Express.js, and Socket.IO. The application enables multiple users to connect to a common server and communicate with each other in real time. Whenever a user sends a message, the server immediately broadcasts it to all connected clients, ensuring instant message delivery and synchronization.

This project helped in understanding client-server communication, event-driven programming, and the role of Socket.IO in enabling bidirectional communication between web clients and servers.

## Technologies and Tools Used

### Frontend Technologies

* HTML5
* CSS3
* JavaScript

### Backend Technologies

* Node.js
* Express.js

### Real-Time Communication

* Socket.IO

### Development Tools

* Visual Studio Code (VS Code)
* NPM (Node Package Manager)

These technologies were selected because they provide a lightweight and efficient environment for developing real-time web applications.

## Testing Platforms

To demonstrate the real-time functionality of the application, the chat system was tested simultaneously on three different clients:

* **Ahmed** using Microsoft Edge
* **Abdul** using Google Chrome
* **John** using VS Code Browser Preview

All three clients were connected to the same local Socket.IO server. This testing setup successfully demonstrated message broadcasting and synchronization across multiple users and platforms.

## Working of the Application

The application follows a client-server architecture.

### 1.User Connection

When a user opens the application in a browser, a Socket.IO connection is established between the client and the server.

### 2.Message Sending

When a user enters a message and clicks the Send button, the message is transmitted from the client to the server through a Socket.IO event.

### 3.Message Broadcasting

The server receives the message and immediately broadcasts it to all connected users using Socket.IO's event-handling mechanism.

### 4.Real-Time Display

All connected clients receive the message instantly and display it on their screens without requiring a page refresh.

This workflow enables seamless and real-time communication among multiple users connected to the application.

## Implementation Details

The backend server was created using Node.js and Express.js. Express.js was used to serve the frontend files, while Socket.IO managed the real-time communication between connected clients. The frontend interface was developed using HTML, CSS, and JavaScript to provide a simple and interactive user experience.

During testing, messages sent by Ahmed in Microsoft Edge were instantly visible to Abdul in Google Chrome and John in VS Code Browser Preview. Similarly, messages sent from any of the other connected clients were immediately displayed on all active sessions, confirming successful implementation of real-time communication.

## Learning Experience

This project provided valuable practical experience in:

* Setting up and managing a Node.js project
* Installing dependencies using NPM
* Understanding Express.js server architecture
* Working with Socket.IO events
* Implementing real-time client-server communication
* Managing multiple connected clients
* Troubleshooting server and port-related issues

The project also strengthened understanding of how real-time applications such as messaging platforms, collaborative tools, live notifications, and multiplayer systems operate.

## Use of AI Assistance

ChatGPT was used as a learning and development assistant throughout the project. It provided guidance on Socket.IO concepts, Node.js commands, troubleshooting errors, understanding client-server communication, and improving the overall structure of the application. The assistance helped accelerate learning while maintaining a clear understanding of the implementation process.

## Outcome

The project was successfully completed and achieved its objective of enabling real-time communication between multiple connected users. Messages were transmitted and displayed instantly across all active clients without page refreshes. Testing across Microsoft Edge, Google Chrome, and VS Code Browser Preview confirmed the reliability of the implementation. This project serves as a strong foundation for developing more advanced real-time web applications in the future.


#OUTPUT

<img width="498" height="671" alt="Image" src="https://github.com/user-attachments/assets/7aad71a3-dcf4-44a2-b68e-9d5552c4e7fc" />


<img width="514" height="635" alt="Image" src="https://github.com/user-attachments/assets/4a8a4247-7949-424d-aac2-e3810d55219b" />
