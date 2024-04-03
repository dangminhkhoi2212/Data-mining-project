from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
import numpy as np
import sys
app = Flask(__name__)
CORS(app)


@app.route("/")
def Home():
    return render_template("index.html")


@app.route('/predict', methods=['POST'])
def predict():
    try:
        form = request.json['data']
        type_model = request.json['model']
        if type_model == 'DT':
            model = pickle.load(open("./model/huy_DT_model.pkl", "rb"))
        elif type_model == 'RF':
            model = pickle.load(open("./model/huy_RF_model.pkl", "rb"))
        elif type_model == 'MLP':
            model = pickle.load(open("./model/huy_MLP_model.pkl", "rb"))
        elif type_model == 'BY':
            model = pickle.load(open("./model/van_Bayes_model.pkl", "rb"))
        elif type_model == 'KNN':
            model = pickle.load(open("./model/van_KNN_model.pkl", "rb"))
        else:
            model = pickle.load(open("./model/van_SVC_model.pkl", "rb"))

        features = [np.array(form)]
        prediction = model.predict(features)
        # print(f"🚀 ~ form: {prediction}",file=sys.stderr )
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
