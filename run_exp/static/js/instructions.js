console.log('hi')

var welcome = "<div class='center'><p>Welcome! This is the first day of the experiment which will last ~30 minutes. In this experiment, you are the head captain of a pirate ship traveling around the world to different places. You will complete several different tasks during this experiment. Here is an overview of these tasks:</p><br><p>Day 1</p><p>1. Tutorial and quiz</p><p>2. Pick a pirate game in 6 different places</p><br><p>Day 2</p><p>3. Pick a pirate game and memory game</p><p>4. Final questions and payment</p><br><p>If you complete the entire experiment, you will receive $15 and a possible bonus payment.</p><p><b>[Press the space bar to begin the tutorial]</b></p></div>";

var goal_of_game_1 = "<div class='center'><p>You are the head captain of a pirate ship.</p><p> Your pirates rob other ships as they leave the marketplace port.</p> These ships have just sold all their goods at the marketplace, so they have lots and lots of gold on them.</p><p><img src='run_exp/static/images/ship_center.png' height='400'></p><p><b>[Press the space bar to continue]</b></p></div>";

var goal_of_game_2 = "<div class='center'><p>As the head captain, you do not have to rob any ships yourself.</p><p>You get to choose which pirate you want to rob the next ship. </p><p>If they are successful at robbing the ship, then you will get gold coins.</p><p> If they are not successful, then you will get no gold coins.</p><p> The more coins you collect, the more bonus money you will win. So, choose your pirate wisely.</p><p><img src='run_exp/static/images/goal.png' height='400'></p><p><b>[Press the space bar to continue]</b></p><div>";

var probabilistic = "<div class='center'><p>Even the most skilled pirate will not be able to rob EVERY ship.</p><p> Some ships will have very strong defenses against attacks.</p><p> For example, blue beard, here,  is very good at robbing ships.</p><p> You can press the <b>‘1’</b> button on the keyboard to choose him.</p><p> Try choosing him 10 times to see how often he is successful at robbing ships. </p><p><img src='run_exp/static/images/blue.png' height='500'></p></div>";

var blue_beard_outcome = "<div class='center'><p> See, he was successful at robbing the ships most of the time but not every time. </p><p><b>[Press the space bar to continue]</b></p></div>";

var pick_pirate = "<div class='center'><p>In the game, you will get to choose which of three pirates you want to rob the next ship. <p>Press the <b>‘1’</b> button on your keyboard to pick the pirate with the red beard.</p><p> Press <b>‘2’</b> to pick the pirate with the white beard.</p><p> Press <b>‘3’</b> to pick the pirate with the black beard.</p><p>Try picking a pirate now!</p><p><img src='run_exp/static/images/all_pirates.png' height='500'></p></div>";

var red_won = "<div class='center'><p>This pirate was successful at robbing the ship!</p><p><img src='run_exp/static/images/red_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var white_won = "<div class='center'><p>This pirate was successful at robbing the ship!</p><p><img src='run_exp/static/images/white_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var black_won = "<div class='center'><p>This pirate was successful at robbing the ship!</p><p><img src='run_exp/static/images/black_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var pick_pirate_agin = "<div class='center'><p>Now try choosing another</p><p><img src='run_exp/static/images/all_pirates.png' height='500'></p></div>";

var red_loss = "<div class='center'><p>This pirate was not successful at robbing the ship!</p><p><img src='run_exp/static/images/red_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var white_loss = "<div class='center'><p>This pirate was not successful at robbing the ship!</p><p><img src='run_exp/static/images/white_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var black_loss = "<div class='center'><p>This pirate was not successful at robbing the ship!</p><p><img src='run_exp/static/images/black_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var different_places = "<div class='center'><p>You’ll stop at these 6 places on your journey.</p><p><img src='run_exp/static/images/all_contexts.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var changepoint = "<div class='center'><p>How good a pirate is at robbing ships will depend on the current place.</p><p> Some pirates will have been to the place before, and will have more experience robbing ships there.</p><p>So, they will be more successful at stealing gold and bringing it back to you.</p><p><b>[Press the space bar to continue]</b></p></div>";

var drift = "<div class='center'><p>How successful a pirate is at robbing ships can also change in a place.<p> Ships may hear about the pirates coming and will improve their defenses. This may make it more difficult to rob them.</p><p> Ships may also grow lazy and lower their defenses. This may make it easier to rob them.</p><br><p>Things are always changing on the high seas! So, try your best to pay attention!</p><p><img src='run_exp/static/images/contingency.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var probe = "<div class='center'><p>Once you choose a pirate to rob a ship, you’ll be shown the ship they are robbing.</p><p>The ship will have a picture of the item they sold at the marketplace.</p><p> Try your best to remember the ship and where you saw the ship.</p><p> You’ll have to remember this for later, and remembering this correctly will help you win more bonus money!</p><p>You can remember the ship by remembering the item they sold at the marketplace</p><p>A helpful strategy is to try to come up with a story of the chosen pirate and ship’s item interacting with the scene.</p><p> For example, a ship might have sold travel mugs and you could imagine red beard walking through the city with a travel mug. </p><p>Or imagine an apple falling from a tree into white beard's hands in the forest.</p><p><img src='run_exp/static/images/example_probe.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var time_out = "<div class='center'><p>If you don’t make your choice fast enough, you’ll have to wait a few seconds before you can make another one. </p><p>You can’t win more gold. You just have to sit and wait.</p><p><img src='run_exp/static/images/hurry_up.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var summary = "<div class='center'><p>Again, you have two important things to do: </p><b><p> 1. Pick the pirate who you think will be most successful at robbing the next ship.</p></b><b><p> 2. Remember where a pirate robbed a ship.</p> </b><p>Both are important in determining how much bonus money you’ll win.</p><br><p>Let’s try a practice game. The game will start by showing you the pirates. First pick a pirate using the <b> 1, 2, 3 </b> buttons on your keyboard. When you are shown a ship, try to remember the place you’re in by making up a story.</p><p> You only have 3 seconds to pick a pirate, so please make a choice quickly! If you are too slow, you’ll have to wait a bit during the time out.</p><p> Don’t feel rushed, but please do try to make a choice every time.</p><p>How good a pirate is at robbing a ship will change depending on the place they are in and how good the defenses are of the ship.</p> <p>This is just a practice game, so you’re not playing for money. </p><p>You’ll receive a bag which may or may not contain gold coins.</p><p> In the real game, though, you’ll be able to see whether or not you received the gold coins.</p><p> Good luck, remember press <b>'1'</b> to choose red beard, <b>'2'</b> to choose white beard, and <b>'3'</b> to choose black beard</p><p><b>[Press the space bar to begin the practice game]</b></p></div>";

var quiz_intro = "<div class='center'><p>Great job on the practice game!</p><p> Now, you will be asked you some true or false questions to make sure you really understand the rules of the game.</p><p> Press <b>'1'</b> on the keyboard for true and press <b>'2'</b> for false.</p><p><b>[Press the space bar to begin the quiz]</b></p></div>";

var q1 = "<div class='center'><p>You win bonus money by making choices as fast as possible.</p><p>Press 1 for true and press  2 for false.</p></div>"

var q2 = "<div class='center'><p>You press the <b>‘3’</b> button on the keyboard to choose the red bearded pirate? </p><p>Press 1 for true and press  2 for false.</p></div>"

var q3 = "<div class='center'><p>A pirate will always be equally successful at robbing ships in each place</p><p>Press 1 for true and press  2 for false.</p></div>";

var q4 = "<div class='center'><p>You should remember the place where a pirate robbed a ship.</p><p>Press 1 for true and press  2 for false.</p></div>";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var final_place = "<div class='center'><p>You’ve arrived at the final destination of your journey! Unfortunately, it’s very foggy out, so you won’t be able to see it in the distance like in previous places you've visited.</p><p>You’ll still be deciding which pirates you want to rob ships. However, because of the fog you also won’t be able to see the ship in the distance. </p><p><b>[Press the space bar to continue]</b></p></div>";

var recognition = "<div class='center'><p> Sometimes you’ll be asked if you’ve seen a ship before (see the example below). You will use the 5, 6, 7, 8 buttons on your keyboard to respond. </p><p> If you definitely did not see the ship, pick the the big red thumbs down by pressing <b>5</b>.</p><p> If you don’t think you saw it but aren’t sure, then pick the small red thumbs down by pressing <b>6</b>.</p><p> If you think you might have seen it, then pick the small green thumbs up by pressing <b>7</b>.</p><p> If you definitely did see this ship before, then pick the big thumb green thumbs up by pressing <b>8</b>.</p><p> If you recall correctly, then you’ll get a gold coin!</p><p><b>[Press the space bar to begin the next phase of the experiment]</b></p><p><img src='run_exp/static/images/example_recog_trial.png' height='500'></p></div>"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var instruc1 = {
  type: 'html-keyboard-response',
  stimulus:welcome,
  choices: ['space'],
  on_finish: function(data) {
    data.subject_id = subject_id;
  }
}

var instruc2 = {
  type: 'html-keyboard-response',
  stimulus:goal_of_game_1,
  choices: ['space'],
}

var instruc3 = {
  type: 'html-keyboard-response',
  stimulus:goal_of_game_2,
  choices: ['space'],
}

var instruc4 = {
  type: 'html-keyboard-response',
  stimulus:probabilistic,
  choices: ['1'],
}

var blue_alone = {
  type: 'html-keyboard-response',
  prompt:"Press the '1' button on the keyboard to pick blue beard.",
  stimulus:"<br><br><br><br><p><img src='run_exp/static/images/blue.png' height='500'></p>",
  choices: ['1'],
}

var blue_win = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p><img src='run_exp/static/images/blue_win.png' height='500'></p>",
  choices: jsPsych.NO_KEYS,
  trial_duration:1500,
}

var blue_no_win = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p><img src='run_exp/static/images/blue_no_win.png' height='500'></p>",
  choices: jsPsych.NO_KEYS,
  trial_duration:1500,
}

var instruc5 = {
  type: 'html-keyboard-response',
  stimulus:blue_beard_outcome,
  choices: ['space'],
}

var choice_won_red = {
  type: 'html-keyboard-response',
  stimulus:red_won,
  choices: ['space'],
}

var choice_won_white = {
  type: 'html-keyboard-response',
  stimulus:white_won,
  choices: ['space'],
}

var choice_won_black = {
  type: 'html-keyboard-response',
  stimulus:black_won,
  choices: ['space'],
}

var choice_loss_red = {
  type: 'html-keyboard-response',
  stimulus:red_loss,
  choices: ['space'],
}

var choice_loss_white = {
  type: 'html-keyboard-response',
  stimulus:white_loss,
  choices: ['space'],
}

var choice_loss_black = {
  type: 'html-keyboard-response',
  stimulus:black_loss,
  choices: ['space'],
}

var instruc8 = {
  type: 'html-keyboard-response',
  stimulus:different_places,
  choices: ['space'],
}

var instruc7 = {
  type: 'html-keyboard-response',
  stimulus:pick_pirate_agin,
  choices: ['1','2','3'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    if (key_pressed == '1') {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_loss_red],}, jsPsych.resumeExperiment);
    } else if (key_pressed == '2') {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_loss_white],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_loss_black],}, jsPsych.resumeExperiment);
    }
    jsPsych.addNodeToEndOfTimeline({timeline: [instruc8,instruc9,instruc10,instruc11,instruc12,instruc13,
      prac_choice_trial,prac_choice_trial,prac_choice_trial,prac_choice_trial,
      prac_choice_trial,quiz_beginning,first_q],}, jsPsych.resumeExperiment);
  }
}


var instruc6 = {
  type: 'html-keyboard-response',
  stimulus:pick_pirate,
  choices: ['1','2','3'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    if (key_pressed == '1') {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_won_red,instruc7],}, jsPsych.resumeExperiment);
    } else if (key_pressed == '2') {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_won_white,instruc7],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_won_black,instruc7],}, jsPsych.resumeExperiment);
    }
  }
}

var instruc9 = {
  type: 'html-keyboard-response',
  stimulus:changepoint,
  choices: ['space'],
}

var instruc10 = {
  type: 'html-keyboard-response',
  stimulus:drift,
  choices: ['space'],
}

var instruc11 = {
  type: 'html-keyboard-response',
  stimulus:probe,
  choices: ['space'],
}

var instruc12 = {
  type: 'html-keyboard-response',
  stimulus:time_out,
  choices: ['space'],
}

var instruc13 = {
  type: 'html-keyboard-response',
  stimulus:summary,
  choices: ['space'],
}

var quiz_beginning = {
  type: 'html-keyboard-response',
  stimulus:quiz_intro,
  choices: ['space'],

}

var correct = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p>That's correct!</p> <p><b>[press the space bar to continue with the quiz]</b></p>",
  choices: ['space'],
}

var q1_err = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p>That’s incorrect! You win bonus money by collecting as many gold coins as possible!</p><p><b>[press the space bar to continue with the quiz]</b></p>",
  choices: ['space'],
}

var q2_err = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p>That’s incorrect! You press the <b>‘1’</b> button to choose the red bearded pirate!</p><p><b>[press the space bar to continue with the quiz]</b></p>",
  choices: ['space'],
}

var q3_err = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p>That’s incorrect! Pirates will be successful in different places.!</p><p><b>[press the space bar to continue with the quiz]</b></p>",
  choices: ['space'],
}

var q4_err = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p>That’s incorrect! You should remember the place where a pirate robbed a ship. You can try associating the ship’s item with the place to better remember.</p><p><b>[press the space bar to continue with the quiz]</b></p>",
  choices: ['space'],
}

var q_all_err = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p>Oops, you missed some questions. Now that you’ve heard the correct answers. Try the quiz again! If you fail the quiz too many times, you won’t be able to do the experiment. </p> <p><br>[press the space bar to repeat the quiz]</br></p>",
  choices: ['space'],
}

var too_many_error = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p>You've failed the quiz too many times. The experiment is over. </p> <p><br>[press the space bar to end the experiment]</br></p>",
  choices: ['space'],
}

var q_all_corr = {
  type: 'html-keyboard-response',
  stimulus:"<br><br><br><br><p>Good job! You’re now ready to move on to the real game!</p> <p><br>[press the space bar to begin!]</br></p>",
  choices: ['space'],
}

var first_q = {
  type: 'html-keyboard-response',
  stimulus: q1,
  choices: ['1','2'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    console.log('try q1')
    if (key_pressed == '1') {
      n_errors += 1
      jsPsych.addNodeToEndOfTimeline({timeline: [q1_err,second_q],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [correct,second_q],}, jsPsych.resumeExperiment);
    }
  }
}

var second_q = {
  type: 'html-keyboard-response',
  stimulus: q2,
  choices: ['1','2'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    if (key_pressed == '1') {
      n_errors += 1
      jsPsych.addNodeToEndOfTimeline({timeline: [q2_err,third_q],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [correct,third_q],}, jsPsych.resumeExperiment);
    }
  }
}

var third_q = {
  type: 'html-keyboard-response',
  stimulus: q3,
  choices: ['1','2'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    if (key_pressed == '1') {
      n_errors += 1
      jsPsych.addNodeToEndOfTimeline({timeline: [q3_err,fourth_q],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [correct,fourth_q],}, jsPsych.resumeExperiment);
    }
  }
}

var fourth_q = {
  type: 'html-keyboard-response',
  stimulus: q4,
  choices: ['1','2'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    if (key_pressed == '1') {
      jsPsych.addNodeToEndOfTimeline({timeline: [correct],}, jsPsych.resumeExperiment);
    } else {
      n_errors += 1
      jsPsych.addNodeToEndOfTimeline({timeline: [q4_err],}, jsPsych.resumeExperiment);
    }

    if (n_errors > 0) {
      n_errors = 0
      jsPsych.addNodeToEndOfTimeline({timeline: [q_all_err,first_q],}, jsPsych.resumeExperiment);
      } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [q_all_corr,],}, jsPsych.resumeExperiment);
      make_learn_phase()
    }
  }
}



var all_done = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'>You are all done with the first part of the experiment! Thank you for participating. Tomorrow, you will recieve an invite to participate in the next phase of the experiment which you must complete by the end of the day. <p><b>[Press the space bar to end the experiment]</b></p></div>",
  choices: ['space'],
  on_finish: function(data) {
    console.log(invalidProbeTrials)
    data.contextArray_ind = contextArray_ind;
    data.validImageProbes = valid_probe_images_ind;
    data.invalidImageProbes = invalid_probe_images_ind;
    data.pRew_Red = pRew_Red;
    data.pRew_White = pRew_White;
    data.pRew_Black = pRew_Black;
    data.availableForMemProbe = availableForMemProbe;
    data.invalidProbeTrials = invalidProbeTrials;
    data.invalidProbeTrials_copy = invalidProbeTrials_copy;
    data.choice_blocks = choice_blocks;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var n_errors = 0;
var n_failures = 0;
