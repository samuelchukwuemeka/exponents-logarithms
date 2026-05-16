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
    To Write: Exponential Model of the Data
    Show all steps
*/
document.getElementById("exponentialModelForm").addEventListener("submit", exponentialModelForm);

function exponentialModelForm(event) 
{
    event.preventDefault();

    var datasetX = document.getElementById('datasetX').value,
        datasetY = document.getElementById('datasetY').value,
        datasetSplitX = datasetX.split('\n'),
        datasetSplitY = datasetY.split('\n'),
        dataX = datasetSplitX.map(Number),
        dataY = datasetSplitY.map(Number),
        sampleSizeX = dataX.length,
        sampleSizeY = dataY.length,
        datasetXA = [],
        datasetYA = [],
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
        slope,
        intercept,
        initialValue,
        base,
        initialValueA,
        baseA;
        
        
        if (sampleSizeX !== sampleSizeY)
        {
            alert("The two sample sizes must be the same.\nIn other words, the sample size of dataset X must be equal to the sample size of dataset Y\nPlease review.");
            return;
        }
                        
        for(var i = 0; i < sampleSizeX, i < sampleSizeY; i++)
        {
            datasetXA[i] = dataX[i];

            datasetYA[i] = Math.log(dataY[i]);
        }

        for(var i = 0; i < sampleSizeX, i < sampleSizeY; i++)
        {
            sumX += datasetXA[i];
            
            sumY += datasetYA[i];
        }

        meanX = sumX / sampleSizeX;

        meanY = sumY / sampleSizeY;
        
        for(var i = 0; i < sampleSizeX, i < sampleSizeY; i++)
        {
            deviationMeanX[i] = datasetXA[i] - meanX;
            squareDeviationMeanX[i] = Math.pow(deviationMeanX[i], 2);
            sumSquareDeviationMeanX += squareDeviationMeanX[i];

            deviationMeanY[i] = datasetYA[i] - meanY;
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

        slope = correlationCoefficient * (standardDeviationY / standardDeviationX);

        intercept = meanY - (slope * meanX);
               
        initialValue = Math.exp(intercept);

        initialValueA = initialValue;

        base = Math.exp(slope);

        baseA = base;

        if(base < 0)
        {
            alert("The base must be a positive real number.\nPlease review your dataset and try again.");
            return;
        }
        
                           
    document.getElementById("datasetXA").value = datasetXA.join("\n");
    document.getElementById("datasetYA").value = datasetYA.join("\n");
    document.getElementById("slope").value = slope;
    document.getElementById("intercept").value = intercept;
    document.getElementById("initialValue").value = initialValue;
    document.getElementById("base").value = base;
    document.getElementById("initialValueA").value = initialValueA;
    document.getElementById("baseA").value = baseA;    

    var independentVariable = parseFloat(document.getElementById("independentVariable").value, 10) || 0,
    dependentVariable = parseFloat(document.getElementById("dependentVariable").value, 10) || 0,
    independentVariableA,
    dependentVariableA,
    dependentVariableB, 
    independentVariableB;

    independentVariableA = independentVariable;
    dependentVariableA = initialValue * Math.pow(base, independentVariable);

    dependentVariableB = dependentVariable;
    independentVariableB = Math.log(dependentVariableB / initialValue) / Math.log(base);

    document.getElementById("independentVariableA").value = independentVariableA;
    document.getElementById("dependentVariableA").value = dependentVariableA;
    document.getElementById("dependentVariableB").value = dependentVariableB;
    document.getElementById("independentVariableB").value = independentVariableB;
}