/*
    Copyright 2022 - Samuel Dominic Chukwuemeka (Samdom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.com
    www.samdomforpeace.appspot.com
    www.exponents-logarithms.appspot.com/calculators.html
*/


/*
    Given: Datasets X and Y
    To Write: Logarithmic Model of the Data
    Show all steps
*/
document.getElementById("logarithmicModelForm").addEventListener("submit", logarithmicModelForm);

function logarithmicModelForm(event) 
{
    event.preventDefault();

    var datasetX1st = document.getElementById('datasetX1st').value,
        datasetY1st = document.getElementById('datasetY1st').value,
        datasetSplitX1st = datasetX1st.split('\n'),
        datasetSplitY1st = datasetY1st.split('\n'),
        dataX1st = datasetSplitX1st.map(Number),
        dataY1st = datasetSplitY1st.map(Number),
        sampleSizeX = dataX1st.length,
        sampleSizeY = dataY1st.length,
        datasetXA1st = [],
        datasetYA1st = [],
        sumX = 0,
        meanX,
        deviationMeanX = [],
        squareDeviationMeanX = [],
        sumSquareDeviationMeanX = 0,
        standardDeviationX,
        quotientX = [],
        sumY = 0,
        meanY,
        deviationMeanY = [],
        squareDeviationMeanY = [],
        sumSquareDeviationMeanY = 0,
        standardDeviationY,
        quotientY = [],
        productQuotientsA = [],
        sumProducts = 0,
        sampleSizeLess = sampleSizeX - 1,
        correlationCoefficient,
        slope1st,
        intercept1st,
        slope1,
        intercept1,
        slopeFirst,
        interceptFirst;
        
        
        if (sampleSizeX !== sampleSizeY)
        {
            alert("The two sample sizes must be the same.\nIn other words, the sample size of dataset X must be equal to the sample size of dataset Y\nPlease review.");
            return;
        }
                        
        for(var i = 0; i < sampleSizeX, i < sampleSizeY; i++)
        {
            datasetXA1st[i] = Math.log(dataX1st[i]);

            datasetYA1st[i] = dataY1st[i];
        }

        for(var i = 0; i < sampleSizeX, i < sampleSizeY; i++)
        {
            sumX += datasetXA1st[i];
            
            sumY += datasetYA1st[i];
        }

        meanX = sumX / sampleSizeX;

        meanY = sumY / sampleSizeY;
        
        for(var i = 0; i < sampleSizeX, i < sampleSizeY; i++)
        {
            deviationMeanX[i] = datasetXA1st[i] - meanX;
            squareDeviationMeanX[i] = Math.pow(deviationMeanX[i], 2);
            sumSquareDeviationMeanX += squareDeviationMeanX[i];

            deviationMeanY[i] = datasetYA1st[i] - meanY;
            squareDeviationMeanY[i] = Math.pow(deviationMeanY[i], 2);
            sumSquareDeviationMeanY += squareDeviationMeanY[i];
        }

        standardDeviationX = Math.sqrt(sumSquareDeviationMeanX / sampleSizeLess);
        
        standardDeviationY = Math.sqrt(sumSquareDeviationMeanY / sampleSizeLess);

        for(var i = 0; i < sampleSizeX, i < sampleSizeY; i++)
        {
            quotientX[i] = deviationMeanX[i] / standardDeviationX;

            quotientY[i] = deviationMeanY[i] / standardDeviationY;

            productQuotientsA[i] = quotientX[i] * quotientY[i];

            sumProducts += productQuotientsA[i];
        }

        correlationCoefficient = sumProducts / sampleSizeLess;

        slope1st = correlationCoefficient * (standardDeviationY / standardDeviationX);

        intercept1st = meanY - (slope1st * meanX);

        slope1 = slope1st;

        intercept1 = intercept1st;
               
        slopeFirst = slope1st;

        interceptFirst = intercept1st;
                
                           
    document.getElementById("datasetXA1st").value = datasetXA1st.join("\n");
    document.getElementById("datasetYA1st").value = datasetYA1st.join("\n");
    document.getElementById("slope1st").value = slope1st;
    document.getElementById("intercept1st").value = intercept1st;
    document.getElementById("slope1").value = slope1;
    document.getElementById("intercept1").value = intercept1;
    document.getElementById("slopeFirst").value = slopeFirst;
    document.getElementById("interceptFirst").value = interceptFirst;
     

    var independentVariableA1st = parseFloat(document.getElementById("independentVariableA1st").value, 10) || 0,
    dependentVariableB1st = parseFloat(document.getElementById("dependentVariableB1st").value, 10) || 0,
    dependentVariableA1st,
    independentVariableB1st,
    exponent1st;

    dependentVariableA1st = intercept1st + (slope1st * Math.log(independentVariableA1st));

    exponent1st = (dependentVariableB1st - intercept1st) / slope1st;

    independentVariableB1st = Math.pow(Math.E, exponent1st);

    document.getElementById("independentVariableA1st").value = independentVariableA1st;
    document.getElementById("dependentVariableA1st").value = dependentVariableA1st;
    document.getElementById("dependentVariableB1st").value = dependentVariableB1st;
    document.getElementById("independentVariableB1st").value = independentVariableB1st;
}