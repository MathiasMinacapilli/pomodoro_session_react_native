# Pomodoro Session App
This app is to help people while studying aplying the pomodoro technique. This technique is based in studying in blocks of 25 minutes, and take rests of about 5 minutes. After 4 consecutively blocks, you could take a longer rest.

# Setup of the Project
1. Install Android Studio
2. Install Android SDK
3. Configure the `ANDROID_HOME` environment variable. Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` config file:
```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

# Development
For development we use [eslint](https://eslint.org/) for code formatting and [editor config](https://editorconfig.org/) in order to all the developers in its editors have same configuration for code.
