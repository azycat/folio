---
title: 'Multiplayer Trivia'
date: 2023-08-23
tags: game python streamlit coursework
youtube: B-DqJgZcLjA
---

Final project for my Computer Networking class to demonstrate TCP socket programming. Our group made a multiplayer trivia game inspired by [_Kahoot!_](https://kahoot.com/what-is-kahoot/)

## Gameplay Overview

- <u>Lobby Phase</u>
  - Room supports up to 2-5 players
  - One player voted as the Host
  - Game starts when all players click "Ready"
- <u>Gameplay Phase</u>
  - Each round, a question is displayed to all non-host players
  - Whoever presses their **buzzer** first gets to answer
  - Answering stage is time-sensitive. If player takes too long, then the buzzer gets freed
  - Host reviews all answers. If correct, move onto the next question
  - Game continues until a player reaches ten points, or no questions left

## Contributions

- Created communication protocols between server backend and the client frontends, including establishment of initial connection and listening queues that load incoming updates to/from the GUI
- Designed messaging scheme: send/answer data requests, process and pass data between sockets using "tokens", notify all clients of logical state updates
- Designed and implemented underlying application logic for Lobby and Gameplay loops
- Handled state transitions in the server and forwarded updates to the client
- Debugging, refactoring, repo management, resolving merge conflicts
- Created the GUI, UX, and screen flow (see below)

### Streamlit GUI

I created the GUI front-end for the client applications using the [Streamlit framework](https://streamlit.io/).

Displaying real-time updates between the server and clients presented a challenge. Streamlit redraws the entire screen each time its internal session state changes, but it doesn't officially support calls to its APIs outside of the single thread running the main script.

In our game code, each client needs an async listening thread to handle user inputs while simultaneously receiving messages from the server. These messages, carrying information about the updated game state, are loaded into a `queue` to be processed individually. I needed a way to display these updates to the app in real-time.

At the time of writing, Streamlit multi-threading is quite unexplored, and I found myself struggling for weeks with scarce and outdated documentation. Many users seemed to doubt whether it was possible at all.

This project required me to develop a deeper understanding of threading and event loops. In order to trigger Streamlit to rerun its script from my external message queue thread, I had to isolate the Streamlit session's main loop during runtime to notify it directly.

## Conclusion

There's something so satisfying about seeing the parts you've designed come together like a well-oiled machine. I love watching the server and clients working in tandem, passing objects back and forth through open sockets.

Overall, I'm super proud of how our game turned out. I was able to experiment with an existing framework and push its functionalities beyond what was thought to be possible. When I have the time, I'd like to write a detailed guide for creating multi-threaded Streamlit web apps. I saw many others facing similar problems during my research, and I'd like to be able to help them achieve my results.
