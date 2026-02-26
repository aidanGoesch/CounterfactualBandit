jsPsych.plugins["do_pick_secondBest_pirate"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'do_pick_secondBest_pirate',
    description: '',
    parameters: {
      choices: {
        type: jsPsych.plugins.parameterType.KEY,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      pirates: {
        type: jsPsych.plugins.parameterType.ARRAY,
        pretty_name: 'Array of Pirates.',
        default: [],
        description: 'All the pirates that could be displayed on the screen.'
      },
      context: {
        type: jsPsych.plugins.parameterType.OBJECT,
        pretty_name: 'Contexts to show.',
        default: [],
        description: 'The contexts that can be chosen between.'
      },
      best_array: {
        type: jsPsych.plugins.parameterType.ARRAY,
        pretty_name: 'Best array.',
        default: [],
        description: 'The best array images.'
      },
      miscell: {
        type: jsPsych.plugins.parameterType.ARRAY,
        pretty_name: 'Array of miscellaneous things.',
        default: [],
        description: 'All the miscellaneous things that could be displayed on the screen.'
      }
    }
  }

  plugin.trial = function (display_element, trial) {

    var response = {
      rt: null,
      key: null
    };

    var response_key_dict = {
      49: 1,
      50: 2,
      51: 3
    }

    // show pirates, context, and second best question (index 1 in best_array)
    trial.pirates[0].show();
    trial.context.show();
    trial.best_array[1].show(); // second_best_question image

    var show_choice = function() {
      trial.pirates[0].hide();

      let key_pressed = response_key_dict[response.key];
      trial.pirates[key_pressed].show();
      // best_array[1] intentionally NOT hidden here

      jsPsych.pluginAPI.setTimeout(function() {
        trial.pirates[key_pressed].hide();
        trial.best_array[1].hide(); // only hidden right before end_trial
        trial.context.hide();
        end_trial();
      }, 1000);
    }

    var end_trial = function() {
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);

      var trial_data = {
        rt: response.rt,
        response: response.key
      };

      jsPsych.finishTrial(trial_data);
    };

    var after_response = function(info) {
      if (response.key == null) {
        response = info;
      }
      jsPsych.pluginAPI.cancelAllKeyboardResponses();
      show_choice();
    };

    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }

    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        if (response.key == null) {
          jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
          trial.pirates[0].hide();
          trial.context.hide();
          trial.best_array[1].hide();
          trial.miscell[2].show();
          jsPsych.pluginAPI.setTimeout(function() {
            trial.miscell[2].hide();
            end_trial();
          }, 3000);
        }
      }, trial.trial_duration);
    }
  }

  return plugin;
})();