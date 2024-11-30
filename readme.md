# RacePace Project Setup

This guide explains how to set up and run the RacePace project.


## Prerequisites

Make sure you have the following installed on your system:

- **Python 3.11+**
- **Virtualenv** (optional but recommended)
- **Node.js and npm** (for Tailwind CSS)


## 1. Setting Up the Project

### Create a Virtual Environment (if not already created)

If the virtual environment doesn't exist, create it:

```bash
python3 -m venv env
```

### Activate the Virtual Environment

Navigate to the project directory and activate the environment:

```bash
cd ~/Desktop/racepace
source env/bin/activate
```

Once activated, your terminal prompt should look like this:

```bash
(env) $
```

### Install Dependencies

With the virtual environment active, install the Python dependencies:

```bash
pip install -r requirements.txt
```

Then Tailwind CSS dependencies

```bash
cd racepace/theme
npm install
```

## 2. Running the Application
### Run the Application

To run the project, you’ll need two terminal windows:

Terminal 1: Run the Django development server.
Terminal 2: Start the Tailwind CSS watcher.

#### Terminal 1: Django Development Server

To start the Django development server, first navigate to the project directory:
```bash
cd ~/Desktop/racepace/racepace
```
Then run the following command:
```bash
python manage.py runserver
```

The server will be available at: http://127.0.0.1:8000/

#### Terminal 2: Tailwind CSS Watcher

To start the Tailwind CSS watcher, navigate to the directory:
```bash
cd ~/Desktop/racepace/racepace
```

Then run the following command:
```bash
python manage.py tailwind start
```
This command watches for changes in your CSS files and automatically recompiles Tailwind CSS.
Ensure your terminal has the virtual environment activated.

## 3. Stopping the Project

To stop the Django development server and Tailwind watcher, press `Ctrl+C` in both terminals where you started it.


## 4. Deactivating the Virtual Environment
To deactivate the virtual environment, run:

```bash
deactivate
```

## 5. Troubleshooting
### Common Issues
If you encounter any issues, try the following:
* Make sure you have the correct Python version installed.
* Check that you have installed all the dependencies.
* Ensure that the virtual environment is activated.
* If you're using a different operating system, adjust the commands accordingly.
* If you're still having trouble, feel free to ask for help.
---

