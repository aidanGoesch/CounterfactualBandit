console.log('hi')

var space_bar = "<p><b>[Press the space bar to continue]</b></p>";

var welcome_txt = "<div class='center'><p>Welcome! This study will last ~30 minutes. In part 1 and part 2 of the study, you are the head captain of a pirate ship traveling around the world to different islands. You will play a few different games throughout these two parts. Here is an overview of them:</p><br><p>Part 1 (today)</p><p>1. Instructions, practice game, and quiz</p><p>2. Pick a pirate game on 6 different islands</p><br><p>";

var different_places = "<div class='center'><p>Today, you'll visit these 6 islands on your journey. You'll be able to see these islands from your ship.</p><p><img src='run_exp/static/images/contexts/all_contexts.png' height='500'></p></div>";

var goal_of_game_1 = "<div class='center'><p> The pirates on your ship will rob other ships as they leave the island.</p> These ships have just sold their goods to the islanders, so they will be filled with lots and lots of gold.</p><p><img src='run_exp/static/images/tutorial/ship_center.png' height='400'></p></div>";

var goal_of_game_2 = "<div class='center'><p>As the head captain, you do not have to rob any ships yourself. Another pirate will be doing the robbing for you. First, you will choose a pirate to rob the next ship.</p><p><img src='run_exp/static/images/tutorial/pirates_all_crop.png' height='200'></p><p>Then, you'll see if the pirate successfully robbed the ship of their gold. If they were successful, then you'll get a stack of gold coins like this:</p><p><img src='run_exp/static/images/tutorial/reward.png' height='150'></p><p> If they were <b>not</b> successful, then you'll get no gold coins, and you'll see a big red x like this: </p><p><img src='run_exp/static/images/tutorial/reward_no.png' height='150'></p><p> How much bonus money you make is based on how many gold coins you collect.</p><div>";

var probabilistic = "<div class='center'><p>Even the most skilled pirate can not rob EVERY ship.</p><p> Some ships will have very strong protections against pirate attacks.</p><p> Blue beard, here, is very, very good at robbing ships, but he won't be successful every time he tries to rob one.</p><p> You can press the <b>'1'</b> key on the keyboard to choose him.</p><p> Try choosing him 10 times to see how often he succeeds at robbing a ship. </p><p><img src='run_exp/static/images/tutorial/blue.png' height='500'></p></div>";

var blue_beard_outcome = "<div class='center'><p> See, he succeeded in robbing the ships most of the time but not every time. </p></div>";

var pick_pirate = "<div class='center'><p>From these three pirates, you will get to choose which one you want to rob the next ship. <p>Press the <b>'1'</b> key on your keyboard to pick the pirate with the red beard.</p><p> Press <b>'2'</b> to pick the pirate with the white beard.</p><p> Press <b>'3'</b> to pick the pirate with the black beard.</p><p>Try picking a pirate now!</p><p><img src='run_exp/static/images/tutorial/all_pirates.png' height='500'></p></div>";

var red_won = "<div class='center'><p>Yay! This pirate succeeded in robbing the ship!</p><p><img src='run_exp/static/images/tutorial/red_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var white_won = "<div class='center'><p>Yay! This pirate succeeded in robbing the ship!</p><p><img src='run_exp/static/images/tutorial/white_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var black_won = "<div class='center'><p>Yay! This pirate succeeded in robbing the ship!</p><p><img src='run_exp/static/images/tutorial/black_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var pick_pirate_agin = "<div class='center'><p>Now try choosing another.</p><p><img src='run_exp/static/images/tutorial/all_pirates.png' height='500'></p></div>";

var red_loss = "<div class='center'><p>Oh no! This pirate did not succeed in robbing the ship.</p><p><img src='run_exp/static/images/tutorial/red_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var white_loss = "<div class='center'><p>Oh no! This pirate did not succeed in robbing the ship.</p><p><img src='run_exp/static/images/tutorial/white_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var black_loss = "<div class='center'><p>Oh no! This pirate did not succeed in robbing the ship.</p><p><img src='run_exp/static/images/tutorial/black_no_win.png' height='500'></p><p><b>[Press the space bar to continue]</b></p></div>";

var time_out = "<div class='center'><p>If you don't make your choice fast enough, you'll have to wait a few seconds before you can make another one. </p><p><img src='run_exp/static/images/miscellaneous/hurry_up.png' height='500'></p></div>";

var probe = "<div class='center'><p>Once you've chosen a pirate, you'll be shown the ship they are robbing. You will never rob the same ship twice. Ships can be told apart from one another by the image on them. These are the goods that they sell. See, this ship has a travel mug on it. </p><p> You'll have to remember which island you saw each ship on. You will win more gold coins and hence more bonus money if you remember correctly! To help you remember, you can imagine a story. For example, here, you could imagine a mug full of water in the desert. Or, as another example, if on the forest island, your pirate robbed a ship with an apple on it, you could imagine an apple falling from a tree in the forest. </p><p><img src='run_exp/static/images/tutorial/example_probe.png' height='500'></p></div>";

var changepoint = "<div class='center'><p>How successful a pirate is at robbing ships will depend on the island you're on.</p><p> A pirate may have visited this island many times before and gained a lot of practice robbing ships there.</p><p>So, they're more likely to be successful than a pirate who has never visited the island before.</p></div>";

var drift = "<div class='center'><p>How successful a pirate is at robbing ships can also change over the time spent on the island. </p><p> Ships may hear from islanders about the pirates coming and will improve their protections against the attack. This may make it harder to rob them.</p><p> Ships may also become lazy and weaken the strength of their protections. This may make it easier to rob them.</p><br><p>Things are always changing on the high seas! So, try your best to pay attention!</p><p><img src='run_exp/static/images/tutorial/contingency.png' height='500'></p></div>";

var summary = "<div class='center'><p>Let's go over the instructions quickly again. You have one thing to do: </p><b><p> Pick the pirate who is the best at robbing ships on the current island. </p></b><b><p> The amount of bonus money you can win depends on both.</p><p><br><p>Let's try a practice game. The game will start by showing you the pirates. First, pick a pirate using the <b> 1, 2, 3 </b> keys on your keyboard.</p><p>This is just a practice game, so you're not playing for money. </p><p> Good luck! This game will be very difficult but try your best!</p></div>";

var quiz_intro = "<div class='center'><p>Good job on the practice game! Now, you will be asked some true or false questions to make sure you really understand the rules of the game.</p><p> Press <b>'1'</b> on the keyboard for true and press <b>'2'</b> for false.</p></div>";

var q1 = "<div class='center'><p>You win bonus money by collecting gold coins.</p><p>Press 1 for true and press  2 for false.</p></div>"

var q2 = "<div class='center'><p>The pirate who is the best at robbing ships when you first arrive on the island will definitely still be the best when you leave the island. </p><p>Press 1 for true and press  2 for false.</p></div>"

var q3 = "<div class='center'><p>The pirate who is the best at robbing ships on the first island will be the best on every other island.</p><p>Press 1 for true and press  2 for false.</p></div>";

var q4 = "<div class='center'><p>You should remember the island where a pirate robbed a ship.</p><p>Press 1 for true and press  2 for false.</p></div>";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var instruc1 = {
  type: 'html-keyboard-response',
  stimulus: welcome_txt,
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "instruc1";
    data.subject_id = subject_id;
    data.participant_id = participant_id;
    data.age = age;
    data.gender = gender;
    data.prompt = welcome_txt;
  }
};

var move_forward = {
  type: 'html-keyboard-response',
  stimulus: welcome_txt,
  choices: ['space'],
  on_start: function(move_forward) {
    var last_trial = jsPsych.data.get().last(1).values()[0];
    // Strip closing </div>, append spacebar text, re-close
    var base = last_trial.prompt.replace(/<\/div>\s*$/, '');
    move_forward.stimulus = base + space_bar + '</div>';
  },
}

var instruc2 = {
  type: 'html-keyboard-response',
  stimulus: different_places,
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "instruc2";
    data.prompt = different_places;}
}

// var instruc3 = {
//   type: 'html-keyboard-response',
//   stimulus: goal_of_game_1,
//   choices: jsPsych.NO_KEYS,
//   trial_duration: 2000,
//   on_finish: function(data) {
//     data.trial_type = "instruc3";
//     data.prompt = goal_of_game_1;}
// }

var instruc4 = {
  type: 'html-keyboard-response',
  stimulus: goal_of_game_2,
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "instruc4";
    data.prompt = goal_of_game_2;}
}

var instruc5 = {
  type: 'html-keyboard-response',
  stimulus:probabilistic,
  choices: ['1'],
  on_finish: function(data) {
    data.trial_type = "instruc5";
    data.prompt = probabilistic;}
}

var blue_alone = {
  type: 'html-keyboard-response',
  prompt:"<div class='center'><p>Press the '1' key on the keyboard to pick blue beard.</p></div>",
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
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "instruc6";
    data.prompt = blue_beard_outcome;}
}

var choice_won_red = {
  type: 'audio-keyboard-response',
  stimulus:'run_exp/static/audio/clip_8_chosen_pirate_win.m4a',
  prompt:red_won,
  choices: ['space']
}

var choice_won_white = {
  type: 'audio-keyboard-response',
  stimulus:'run_exp/static/audio/clip_8_chosen_pirate_win.m4a',
  prompt:white_won,
  choices: ['space'],
}

var choice_won_black = {
  type: 'audio-keyboard-response',
  stimulus:'run_exp/static/audio/clip_8_chosen_pirate_win.m4a',
  prompt:black_won,
  choices: ['space'],
}

var choice_loss_red = {
  type: 'audio-keyboard-response',
  stimulus:'run_exp/static/audio/clip_10_chosen_pirate_loss.m4a',
  prompt:red_loss,
  choices: ['space'],
}

var choice_loss_white = {
  type: 'audio-keyboard-response',
  stimulus:'run_exp/static/audio/clip_10_chosen_pirate_loss.m4a',
  prompt:white_loss,
  choices: ['space'],
}

var choice_loss_black = {
  type: 'audio-keyboard-response',
  stimulus:'run_exp/static/audio/clip_10_chosen_pirate_loss.m4a',
  prompt:black_loss,
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
    jsPsych.addNodeToEndOfTimeline({timeline: [instruc9,move_forward,instruc11,move_forward,instruc12,move_forward,instruc13,move_forward,
      welcome_prac,prac_choice_trial,],}, jsPsych.resumeExperiment);
  }
}


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
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "instruc9";
    data.prompt = time_out}
}

// var instruc10 = {
//   type: 'html-keyboard-response',
//   stimulus:probe,
//   choices: jsPsych.NO_KEYS,
//   trial_duration: 2000,
//   on_finish: function(data) {
//     data.trial_type = "instruc10";
//     data.prompt = probe}
// }

var instruc11 = {
  type: 'html-keyboard-response',
  stimulus:changepoint,
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "instruc11";
    data.prompt = changepoint}
}

var instruc12 = {
  type: 'html-keyboard-response',
  stimulus:drift,
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "instruc12";
    data.prompt = drift}
}

var instruc13 = {
  type: 'html-keyboard-response',
  stimulus:summary,
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "instruc13";
    data.prompt = summary}
}

var prac_best_pirate = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p><img src='run_exp/static/images/tutorial/prac_best_pirate.png' height='500'></p></div>",
  choices: ['1','2','3'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    if (key_pressed == '1') {
        jsPsych.addNodeToEndOfTimeline({timeline: [corr_best_pirate, quiz_beginning, first_q]}, jsPsych.resumeExperiment);
    } else {
        jsPsych.addNodeToEndOfTimeline({timeline: [incorr_best_pirate, quiz_beginning, first_q]}, jsPsych.resumeExperiment);
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

var quiz_beginning = {
  type: 'html-keyboard-response',
  stimulus:quiz_intro,
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "quiz_beginning";
    data.prompt = quiz_intro}
  }

var correct = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That's correct!</p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "correct";
    data.prompt = "<div class='center'><p>That's correct!</p></div>"}
}

var q1_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That’s incorrect. You win bonus money by collecting gold coins.</p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "q1_err";
    data.prompt = "<div class='center'><p>That’s incorrect. You win bonus money by collecting gold coins.</p></div>"}
}

var q2_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That’s incorrect. Which pirate is the best may change during your time on the island.</p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "q2_err";
    data.prompt = "<div class='center'><p>That’s incorrect. Which pirate is the best may change during your time on the island.</p></div>"}
  }

var q3_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That’s incorrect. How good a pirate is at robbing ships will change from island to island!</p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "q3_err";
    data.prompt = "<div class='center'><p>That’s incorrect. How good a pirate is at robbing ships will change from island to island!</p></div>"}
}

var q4_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>That’s incorrect. You should remember the island where a pirate robbed a ship. To help you remember, you can make up a story associating the object on the ship with the island.</p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "q4_err";
    data.prompt = "<div class='center'><p>That’s incorrect. You should remember the island where a pirate robbed a ship. To help you remember, you can make up a story associating the object on the ship with the island.</p></div>"}
}

var q_all_err = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>Oops, you missed some questions. Now that you’ve heard the correct answers. Try the quiz again! </p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "q_all_err";
    data.prompt = "<div class='center'><p>Oops, you missed some questions. Now that you’ve heard the correct answers. Try the quiz again! </p></div>"}
}


var q_all_corr = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'><p>Good job! You’re now ready to move on to the real game! Remember this game will be difficult but don't get discouraged and try your best!</p></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  on_finish: function(data) {
    data.trial_type = "q_all_corr";
    data.prompt ="<div class='center'><p>Good job! You’re now ready to move on to the real game! Remember this game will be difficult but don't get discouraged and try your best!</p></div>"}
}

var first_q = {
  type: 'html-keyboard-response',
  stimulus: q1,
  choices: ['1','2'],
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed = response_key_dict[last_trial_data.key_press];
    console.log('try q1')
    if (key_pressed == '2') {
      n_errors += 1
      jsPsych.addNodeToEndOfTimeline({timeline: [q1_err,move_forward,second_q],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [correct,move_forward,second_q],}, jsPsych.resumeExperiment);
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
      jsPsych.addNodeToEndOfTimeline({timeline: [q2_err,move_forward,third_q],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [correct,move_forward,third_q],}, jsPsych.resumeExperiment);
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
      jsPsych.addNodeToEndOfTimeline({timeline: [q3_err,move_forward,fourth_q],}, jsPsych.resumeExperiment);
    } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [correct,move_forward,fourth_q],}, jsPsych.resumeExperiment);
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
      jsPsych.addNodeToEndOfTimeline({timeline: [correct,move_forward,],}, jsPsych.resumeExperiment);
    } else {
      n_errors += 1
      jsPsych.addNodeToEndOfTimeline({timeline: [q4_err,move_forward,],}, jsPsych.resumeExperiment);
    }

    if ((n_errors > 0) & (n_failures < 2)) {
      n_errors = 0
      n_failures += 1
      jsPsych.addNodeToEndOfTimeline({timeline: [q_all_err,move_forward,first_q],}, jsPsych.resumeExperiment);
      } else {
      jsPsych.addNodeToEndOfTimeline({timeline: [q_all_corr,move_forward],}, jsPsych.resumeExperiment);
      make_learn_phase()
    }
  }
}



var all_done = {
  type: 'html-keyboard-response',
  stimulus:"<div class='center'>You are all done with this study! Thank you for participating.</p> <p><b>[Press the space bar to exit]</b></p></div>",
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
