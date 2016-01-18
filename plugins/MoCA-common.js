/**
 * Created by teddy on 11/13/2015.
 */
function Common()
{
    this.setJob = function(job)
    {
        this.job = job;
    }

    this.getAge = function()
    {
        return this.age;
    }

    this.getName = function()
    {
        return this.name;
    }

    this.getGender = function()
    {
        return this.gender;
    }
}

function getAverageResponseTime() {
    var trials = jsPsych.data.getTrialsOfType('single-stim');
    var sum_rt = 0;
    var valid_trial_count = 0;
    trials.forEach(function (stim) {
        if ((stim.key_press == 32|stim.key_press == 'mouse') && stim.rt > -1 ) {
            sum_rt += stim.rt;
            valid_trial_count++;
        }
    });
    return Math.floor(sum_rt / valid_trial_count);
}
function validateAnswers() {
    var trials = jsPsych.data.getTrialsOfType('single-stim');
    var resp = {
        correct:0,
        incorrect:0,
        missed:0
    };
    var i =0;
    trials.forEach(function (stim) {
        if (stim.key_press == 32 || stim.key_press == 'mouse' ) { // space bar
            if(trialAnswers[i]) {
                resp.correct++;
            } else {
                resp.incorrect++;
            }
        } else if(trialAnswers[i]) { // they missed a letter 2 back match
            resp.missed++;
        }
        i++;
    });
    return resp;
}

function validateAnswersString() {
    var resp = validateAnswers();
    return "Correct = "+  resp.correct + " incorrectly identified = "+resp.incorrect + " missed = "+resp.missed;
}

