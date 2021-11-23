console.log('hi')

var welcome = "<div class='center'><p>Welcome! This is the first part of the experiment. It will last ~30 minutes. In this experiment, you are the head captain of a pirate ship traveling around the world to different islands. You will do a few different games during this experiment. Here is an overview of these games:</p><br><p>Part 1</p><p>1. Instructions,practice game, and quiz</p><p>2. Pick a pirate game on 6 different islands</p><br><p>Part 2 (1 day later)</p><p>3. Pick a pirate game and memory game</p><p>4. Where did I see this ship? game</p><p>5. Final questions and payment</p><br><p>Part 3 (1 week later)/p><p>6. Alien space mining game</p><p>7. Memory game</p><br><p>If you complete all three parts of the experiment, you will receive $24 and a possible bonus payment.</p><p><b>[Press the space bar to begin reading the instructions!]</b></p></div>";

var different_places = "<div class='center'><p>Today, you’ll visit these 6 islands on your journey. You'll be able to see them in the distance from your ship.</p><p><img src='run_exp/static/images/contexts/all_contexts.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var goal_of_game_1 = "<div class='center'><p> The pirates on your ship will rob other ships as they leave the island</p> These ships have just sold their things to people on the island, so they will be filled with lots and lots of gold.</p><p><img src='run_exp/static/images/tutorial/ship_center.png' height='400'></p><p><b>[Press the space bar to continue]</b></p></div>";

var goal_of_game_2 = "<div class='center'><p>As the head captain, you do not have to rob any ships yourself.</p><p>Another pirate will be doing the robbing for you. </p><p>You will first choose a pirate.</p><p><img src='run_exp/static/images/tutorial/pirates_all_crop.png' height='200'></p><p>Then, you'll see if the pirate succeeded in robbing the ship. If they were able to, then you will get a stack of gold coins like this:</p><p><img src='run_exp/static/images/tutorial/reward.png' height='150'></p><p> If they could not rob the ship, then you will get no gold coins, and you'll see a big red x like this: </p><p><img src='run_exp/static/images/tutorial/reward_no.png' height='150'></p><p> How much bonus money you make is based on how many gold coins you collect.</p><p><b>[Press the space bar to continue]</b></p><div>";

var probabilistic = "<div class='center'><p>Even the most skilled pirate can not rob EVERY ship.</p><p> Some ships will have very strong protections against pirate attacks.</p><p> Blue beard, here, is very, very good at robbing ships, but he won't be successful every time he tries to rob one.</p><p> You can press the <b>‘1’</b> button on the keyboard to choose him.</p><p> Try choosing him 10 times to see how often he succeeds at robbing a ship. </p><p><img src='run_exp/static/images/tutorial/blue.png' height='500'></p></div>";

var blue_beard_outcome = "<div class='center'><p> See, he could rob the ships most of the time but not every time. </p><p><b>[Press the space bar to continue]</b></p></div>";

var pick_pirate = "<div class='center'><p>From these three pirates, you will get to choose which one you want to rob the next ship. <p>Press the <b>‘1’</b> key on your keyboard to pick the pirate with the red beard.</p><p> Press <b>‘2’</b> to pick the pirate with the white beard.</p><p> Press <b>‘3’</b> to pick the pirate with the black beard.</p><p>Try picking a pirate now!</p><p><img src='run_exp/static/images/tutorial/all_pirates.png' height='500'></p></div>";

var red_won = "<div class='center'><p>Yay! This pirate succeeded in robbing the ship!</p><p><img src='run_exp/static/images/tutorial/red_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var white_won = "<div class='center'><p>Yay! This pirate succeeded in robbing the ship!</p><p><img src='run_exp/static/images/tutorial/white_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var black_won = "<div class='center'><p>Yay! This pirate succeeded in robbing the ship!</p><p><img src='run_exp/static/images/tutorial/black_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var pick_pirate_agin = "<div class='center'><p>Now try choosing another</p><p><img src='run_exp/static/images/tutorial/all_pirates.png' height='500'></p></div>";

var red_loss = "<div class='center'><p>Oh no! This pirate did not succeed in robbing the ship.</p><p><img src='run_exp/static/images/tutorial/red_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var white_loss = "<div class='center'><p>This pirate did not succeed in robbing the ship.</p><p><img src='run_exp/static/images/tutorial/white_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var black_loss = "<div class='center'><p>This pirate did not succeed in robbing the ship.</p><p><img src='run_exp/static/images/tutorial/black_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var time_out = "<div class='center'><p>If you don’t make your choice fast enough, you’ll have to wait a few seconds before you can make another one. </p><p><img src='run_exp/static/images/miscellaneous/hurry_up.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var probe = "<div class='center'><p>Once you choose a pirate, you’ll be shown the ship they are robbing.</p><p>You will never rob the same ship twice.</p><p>Ships can be told apart from one another by the image on them.</p><p> Every time you see a ship, you will have to remember on which island you saw it.</p><p> Remembering correctly will help you win more bonus money!</p><p>A helpful strategy is to try to come up with a story of the object on the ship interacting with the current island scene.</p><p> For example, here, you could imagine a mug full of water in the desert. </p><p>For a ship with an apple on it on the forest island, you could imagine an apple falling from a tree in the forest.</p><p><img src='run_exp/static/images/tutorial/example_probe.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var changepoint = "<div class='center'><p>How good a pirate is at robbing ships will depend on the current island.</p><p> A pirate may have visited the island many times before and gained a lot of practice robbing ships there.</p><p>So, they're more likely to bring back gold coins than a pirate who has never visited this island before. </p><p><b>[Press the space bar to continue]</b></p></div>";

var drift = "<div class='center'><p>How good a pirate is at robbing ships can also change over the time spent on the island<p> Ships may hear from islanders about the pirates coming and will improve their protection against the attack. This may make it harder to rob them.</p><p> Ships may also become lazy and lower their protection. This may make it easier to rob them.</p><br><p>Things are always changing on the high seas! So, try your best to pay attention!</p><p><img src='run_exp/static/images/tutorial/contingency.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var summary = "<div class='center'><p>Let's go over the instructions quickly again.You have two important things to do: </p><b><p> 1. Pick the pirate who is the best at robbing ships on the current island.</p></b><b><p> 2. Remember on which island a ship was robbed.</p> </b><p>How much bonus money you make is based on both. </p><br><p>Let’s try a practice game. The game will start by showing you the pirates. First, pick a pirate using the <b> 1, 2, 3 </b> buttons on your keyboard. When you are shown a ship, try to remember the island you’re on by making up a story.</p><p> You only have 3 seconds to pick a pirate, so please make a choice quickly! If you are too slow, you’ll have to wait a bit during the time out.</p><p> Don’t feel rushed, but please do try to make a choice every time.</p><p>This is just a practice game, so you’re not playing for money. </p><p> Good luck, remember press <b>'1'</b> to choose red beard, <b>'2'</b> to choose white beard, and <b>'3'</b> to choose black beard</p><p><b>[Press the space bar to begin the practice game]</b></p></div>";

// practice goes here

// add in source memory

// add in which pirate was the best question --> tell them

//


var quiz_intro = "<div class='center'><p>Good job on the practice game! Now, you will be asked you some true or false questions to make sure you really understand the rules of the game.</p><p> Press <b>'1'</b> on the keyboard for true and press <b>'2'</b> for false.</p><p><b>[Press the space bar to begin the quiz]</b></p></div>";

var q1 = "<div class='center'><p>You win bonus money by making choices as fast as possible.</p><p>Press 1 for true and press  2 for false.</p></div>"

var q2 = "<div class='center'><p>You press the <b>‘3’</b> button on the keyboard to choose the red bearded pirate. </p><p>Press 1 for true and press  2 for false.</p></div>"

var q3 = "<div class='center'><p>The pirate who is the best at robbing ships on the first island will be the best on every other island.</p><p>Press 1 for true and press  2 for false.</p></div>";

var q4 = "<div class='center'><p>You should remember the island where a pirate robbed a ship.</p><p>Press 1 for true and press  2 for false.</p></div>";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var final_place = "<div class='center'><p>You’ve arrived at the final island of your journey! Unfortunately, it’s very foggy out, so you won’t be able to see it in the distance like the previous islands you've visited.</p><p>You’ll still be deciding which pirate you want to rob a ship like before. However, because of the fog, you also won’t be able to see the ship.</p><p>This means you do not have to remember the ships you rob on this island.</p><p><b>[Press the space bar to continue]</b></p></div>";

var recognition_1 = "<div class='center'><p> Sometimes you’ll be shown a ship, and you will be asked if you saw this ship on a past island.</p><p> Here is an example of what you will see.</p><p><b>[Press the space bar to continue]</b></p><p><img src='run_exp/static/images/tutorial/example_recog_trial.png' height='500'></p></div>"

var recognition_2 = "<div class='center'><p> You will press the 5, 6, 7, 8 buttons on your keyboard to respond.</p><p>If you are very sure saw the ship, press <b>5</b> on your keyboard.</p><p> If you think you  saw it before but are not sure, then press <b>6</b>.</p><p> If you think you have not seen it before but are not sure, then press <b>7</b>.</p><p> If you are sure you did not see the ship before, then press <b>8</b>.</p><p><b>[Press the space bar to continue]</b></p><p><img src='run_exp/static/images/tutorial/example_recog_trial.png' height='500'></p></div>"

var recognition_3 = "<div class='center'><p> If you remember correctly, then you’ll get a gold coin like this: </p><p><img src='run_exp/static/images/tutorial/reward_small.png' height='200'></p><p>If you do not remember correctly, then you'll see a red x like this: </p><p><img src='run_exp/static/images/tutorial/reward_no.png' height='200'></p><p>Importantly, when you are shown a ship, take the time to remind yourself which island you saw it on. This will help you in the next part of the study.</p><p><b>[Press the space bar to continue]</b></p></div>"

var begin_final = "<div class='center'><p>Let's go over the important points again. Your job is to: </p><p>1. Pick the pirate who is best at robbing ships and will bring you back gold coins. </p><p>2. Correctly remember whether or not you saw a ship before. If you did see the ship before, remind yourself on which island you saw the ship. </p><p><b>[Press the space bar to begin the next part of the study]</b></p></div>"

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
  stimulus:different_places,
  choices: ['space'],
}

var instruc3 = {
  type: 'html-keyboard-response',
  stimulus:goal_of_game_1,
  choices: ['space'],
}

var instruc4 = {
  type: 'html-keyboard-response',
  stimulus:goal_of_game_2,
  choices: ['space'],
}

var instruc5 = {
  type: 'html-keyboard-response',
  stimulus:probabilistic,
  choices: ['1'],
}

var blue_alone = {
  type: 'html-keyboard-response',
  prompt:"Press the '1' button on the keyboard to pick blue beard.",
  stimulus:"<div class='center'><img src='run_exp/static/images/tutorial/blue.png' height='500'></p></div>",
  choices: ['1'],
}

var blue_win = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p><img src='run_exp/static/images/tutorial/blue_win.png' height='500'></p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration:1500,
}

var blue_no_win = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p><img src='run_exp/static/images/tutorial/blue_no_win.png' height='500'></p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration:1500,
}

var instruc6 = {
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
    jsPsych.addNodeToEndOfTimeline({timeline: [instruc9,instruc10,instruc11,instruc12,instruc13,
      welcome_prac,prac_choice_trial,],}, jsPsych.resumeExperiment);
  }
}


// ,prac_choice_trial,prac_choice_trial,prac_choice_trial,prac_choice_trial,quiz_beginning,first_q

var instruc7 = {
  type: 'html-keyboard-response',
  stimulus:pick_pirate,
  choices: ['1','2','3'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    if (key_pressed == '1') {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_won_red,instruc8],}, jsPsych.resumeExperiment);
    } else if (key_pressed == '2') {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_won_white,instruc8],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [choice_won_black,instruc8],}, jsPsych.resumeExperiment);
    }
  }
}

var instruc9 = {
  type: 'html-keyboard-response',
  stimulus:time_out,
  choices: ['space'],
}

var instruc10 = {
  type: 'html-keyboard-response',
  stimulus:probe,
  choices: ['space'],
}

var instruc11 = {
  type: 'html-keyboard-response',
  stimulus:changepoint,
  choices: ['space'],
}

var instruc12 = {
  type: 'html-keyboard-response',
  stimulus:drift,
  choices: ['space'],
}

var instruc13 = {
  type: 'html-keyboard-response',
  stimulus:summary,
  choices: ['space'],
}

var prac_best_pirate = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p><img src='run_exp/static/images/tutorial/prac_best_pirate.png'  height='500'></p></div>",
  choices: ['1','2','3'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed =response_key_dict[last_trial_data.key_press];
    console.log(key_pressed)
    if (key_pressed == '1') {
        jsPsych.addNodeToEndOfTimeline({timeline: [corr_best_pirate,prac_source_mem],}, jsPsych.resumeExperiment);
    } else {
        jsPsych.addNodeToEndOfTimeline({timeline: [incorr_best_pirate,prac_source_mem],}, jsPsych.resumeExperiment);
    }
  }
}

var corr_best_pirate = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That's correct! Red beard was the best.</p><p><b>[Press the space bar to continue]</b></p></div>",
  choices: ['space'],
}

var incorr_best_pirate = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That's incorrect! Red beard was the best.</p><p><b>[Press the space bar to continue]</b></p></div>",
  choices: ['space'],
}

var prac_source_mem = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p><img src='run_exp/static/images/tutorial/prac_source.png'  height='500'></p></div>",
  choices: ['1','2'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed =response_key_dict[last_trial_data.key_press];
    if (key_pressed == '2') {
        jsPsych.addNodeToEndOfTimeline({timeline: [corr_source_mem,quiz_beginning, first_q],}, jsPsych.resumeExperiment);
    } else {
        jsPsych.addNodeToEndOfTimeline({timeline: [incorr_source_mem,quiz_beginning,first_q],}, jsPsych.resumeExperiment);
    }
  }
}

var corr_source_mem = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That's correct! You saw this ship on the cavern island.</p><p><b>[Press the space bar to continue]</b></p></div>",
  choices: ['space'],
}

var incorr_source_mem = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That's incorrect! You saw this ship on the cavern island</p><p><b>[Press the space bar to continue]</b></p></div>",
  choices: ['space'],
}

var quiz_beginning = {
  type: 'html-keyboard-response',
  stimulus:quiz_intro,
  choices: ['space'],

}

var correct = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That's correct!</p> <p><b>[press the space bar to continue with the quiz]</b></p></div>",
  choices: ['space'],
}

var q1_err = {
  type: 'html-keyboard-response',
  stimulus:"<<div class='center'><p>That’s incorrect! You win bonus money by collecting as many gold coins as possible!</p><p><b>[press the space bar to continue with the quiz]</b></p></div>",
  choices: ['space'],
}

var q2_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That’s incorrect! You press the <b>‘1’</b> button to choose the red bearded pirate!</p><p><b>[press the space bar to continue with the quiz]</b></p></div>",
  choices: ['space'],
}

var q3_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That’s incorrect! How good a pirate is at robbing ships can change from island to island!</p><p><b>[press the space bar to continue with the quiz]</b></p></div>",
  choices: ['space'],
}

var q4_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That’s incorrect! You should remember the island where a pirate robbed a ship. You can try associating the object on the ship with the island to better remember.</p><p><b>[press the space bar to continue with the quiz]</b></p></div>",
  choices: ['space'],
}

var q_all_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>Oops, you missed some questions. Now that you’ve heard the correct answers. Try the quiz again! If you fail the quiz too many times, you won’t be able to do the experiment. </p> <p><br>[press the space bar to repeat the quiz]</br></p></div>",
  choices: ['space'],
}

var too_many_error = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>You've failed the quiz too many times. The experiment is over. </p> <p><br>[press the space bar to end the experiment]</br></p></div>",
  choices: ['space'],
}

var q_all_corr = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>Good job! You’re now ready to move on to the real game!</p> <p><br>[press the space bar to begin!]</br></p></div>",
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
  stimulus:"<div class='center'>You are all done with the first part of the experiment! Thank you for participating. Tomorrow, you will recieve an invitation to participate in the next phase of the experiment which you must complete by the end of the day. <p><b>[Press the space bar to end the experiment]</b></p></div>",
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
    data.choice_blocks = choice_blocks;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var n_errors = 0;
var n_failures = 0;
