from flask import Flask, request, render_template

import pickle
import numpy as np

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/predict', methods=['POST','GET'])
def predict():
    if request.method == "POST":
        bloodPressure = int(request.form.get("HighChol2"))
        Cholesterol = int(request.form.get("HighChol"))
        BMI = int(request.form.get("bmi"))
        Smoke = int(request.form.get("smoke"))
        Stroke = int(request.form.get("stroke"))
        HeartProb = int(request.form.get("HeartAttack"))
        PhyActivity = int(request.form.get("phyact"))
        Alcho = int(request.form.get("Alcohol"))
        Genhealth = int(request.form.get("Genhlt"))
        menhealth = int(request.form.get("menhlt"))
        phyHealth = int(request.form.get("phyhlt"))
        DiffWalking = int(request.form.get("DiffWalk"))
        Age = int(request.form.get("age"))
        Education = int(request.form.get("education"))
        Income = int(request.form.get("income"))

        if (Age <= 24):
            Age = 1
            if (Age >= 25 and Age <= 29):
                Age = 2
                if (Age >= 30 and Age <= 34):
                    Age = 3
                    if (Age >= 35 and Age <= 39):
                        Age = 4
                    if (Age >= 40 and Age <= 44):
                        Age = 5
                        if (Age >= 45 and Age <= 49):
                            Age = 6
                            if (Age >= 50 and Age <= 54):
                                Age = 7
                                if (Age >= 55 and Age <= 59):
                                    Age = 8
                                    if (Age >= 60 and Age <= 64):
                                        Age = 9
                                    if (Age >= 65 and Age <= 69):
                                        Age = 10
                                        if (Age >= 70 and Age <= 74):
                                            Age = 11
                                            if (Age >= 75 and Age <= 79):
                                                Age = 12
                                            if (Age >= 80):
                                                Age = 13
                                                
                                                

        arr = np.array(
            [
                bloodPressure,
                Cholesterol,
                BMI,
                Smoke,
                Stroke,
                HeartProb,
                PhyActivity,
                Alcho,
                Genhealth,
                menhealth,
                phyHealth,
                DiffWalking,
                Age,
                Education,
                Income,
            ]
        ).reshape(1, -1)
        print(arr)
        result = model.predict(arr)
        if result[0] == 1:
            prediction = "You have diabetes!"
        else:
            prediction = "You do not have diabetes!"
        print(prediction)
        return render_template('index.html', result=prediction,message='Thank you for taking the test! Note that the prediction accuracy is 89.87%')
    
   

if __name__ == "__main__":
    app.run(debug=True)
