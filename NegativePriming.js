/************************ 
 * Negativepriming *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'NegativePriming';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditionssolo1.xlsx', 'path': 'conditionssolo1.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + ((((("data/" + expInfo["participant"]) + "_") + expName) + "_") + expInfo["date"]));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var InstructionsText;
var InstructionsKey;
var trialClock;
var fixation;
var PrimeTarget;
var PrimeDistractor;
var PrimeResponse;
var Blank;
var Probe;
var ProbeResponse;
var EndClock;
var END;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  InstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionsText',
    text: 'You will see two letters on the screen.\nOne letter will be RED and the other will be WHITE.\nRespond only to the RED letter and ignore the WHITE letter.\n\nA → F\nB → J\nAfter this, another letter will appear.\n\nC → F\nD → J\nRespond as quickly and accurately as possible.\nPress SPACEBAR to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  InstructionsKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  PrimeTarget = new visual.TextStim({
    win: psychoJS.window,
    name: 'PrimeTarget',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -1.0 
  });
  
  PrimeDistractor = new visual.TextStim({
    win: psychoJS.window,
    name: 'PrimeDistractor',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  PrimeResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'Blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  Probe = new visual.TextStim({
    win: psychoJS.window,
    name: 'Probe',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  ProbeResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  END = new visual.TextStim({
    win: psychoJS.window,
    name: 'END',
    text: 'Thank you for participating!\n\nThe experiment is now complete. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructionsMaxDurationReached;
var _InstructionsKey_allKeys;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    InstructionsKey.keys = undefined;
    InstructionsKey.rt = undefined;
    _InstructionsKey_allKeys = [];
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(InstructionsText);
    InstructionsComponents.push(InstructionsKey);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionsText* updates
    if (t >= 0.0 && InstructionsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionsText.tStart = t;  // (not accounting for frame time here)
      InstructionsText.frameNStart = frameN;  // exact frame index
      
      InstructionsText.setAutoDraw(true);
    }
    
    
    // if InstructionsText is active this frame...
    if (InstructionsText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *InstructionsKey* updates
    if (t >= 0.0 && InstructionsKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionsKey.tStart = t;  // (not accounting for frame time here)
      InstructionsKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstructionsKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstructionsKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstructionsKey.clearEvents(); });
    }
    
    // if InstructionsKey is active this frame...
    if (InstructionsKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstructionsKey.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _InstructionsKey_allKeys = _InstructionsKey_allKeys.concat(theseKeys);
      if (_InstructionsKey_allKeys.length > 0) {
        InstructionsKey.keys = _InstructionsKey_allKeys[0].name;  // just the first key pressed
        InstructionsKey.rt = _InstructionsKey_allKeys[0].rt;
        InstructionsKey.duration = _InstructionsKey_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(InstructionsKey.corr, level);
    }
    psychoJS.experiment.addData('InstructionsKey.keys', InstructionsKey.keys);
    if (typeof InstructionsKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('InstructionsKey.rt', InstructionsKey.rt);
        psychoJS.experiment.addData('InstructionsKey.duration', InstructionsKey.duration);
        routineTimer.reset();
        }
    
    InstructionsKey.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditionssolo1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _PrimeResponse_allKeys;
var _ProbeResponse_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(3.500000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    PrimeTarget.setText(primeTarget );
    PrimeDistractor.setText(primeDistractor );
    PrimeResponse.keys = undefined;
    PrimeResponse.rt = undefined;
    _PrimeResponse_allKeys = [];
    Probe.setText(probe );
    ProbeResponse.keys = undefined;
    ProbeResponse.rt = undefined;
    _ProbeResponse_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(PrimeTarget);
    trialComponents.push(PrimeDistractor);
    trialComponents.push(PrimeResponse);
    trialComponents.push(Blank);
    trialComponents.push(Probe);
    trialComponents.push(ProbeResponse);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation.tStop = t;  // not accounting for scr refresh
      fixation.frameNStop = frameN;  // exact frame index
      // update status
      fixation.status = PsychoJS.Status.FINISHED;
      fixation.setAutoDraw(false);
    }
    
    
    // *PrimeTarget* updates
    if (t >= 0.5 && PrimeTarget.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PrimeTarget.tStart = t;  // (not accounting for frame time here)
      PrimeTarget.frameNStart = frameN;  // exact frame index
      
      PrimeTarget.setAutoDraw(true);
    }
    
    
    // if PrimeTarget is active this frame...
    if (PrimeTarget.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if ((PrimeTarget.status === PsychoJS.Status.STARTED || PrimeTarget.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      // keep track of stop time/frame for later
      PrimeTarget.tStop = t;  // not accounting for scr refresh
      PrimeTarget.frameNStop = frameN;  // exact frame index
      // update status
      PrimeTarget.status = PsychoJS.Status.FINISHED;
      PrimeTarget.setAutoDraw(false);
    }
    
    
    // *PrimeDistractor* updates
    if (t >= 0.5 && PrimeDistractor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PrimeDistractor.tStart = t;  // (not accounting for frame time here)
      PrimeDistractor.frameNStart = frameN;  // exact frame index
      
      PrimeDistractor.setAutoDraw(true);
    }
    
    
    // if PrimeDistractor is active this frame...
    if (PrimeDistractor.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if ((PrimeDistractor.status === PsychoJS.Status.STARTED || PrimeDistractor.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      // keep track of stop time/frame for later
      PrimeDistractor.tStop = t;  // not accounting for scr refresh
      PrimeDistractor.frameNStop = frameN;  // exact frame index
      // update status
      PrimeDistractor.status = PsychoJS.Status.FINISHED;
      PrimeDistractor.setAutoDraw(false);
    }
    
    
    // *PrimeResponse* updates
    if (t >= 0.5 && PrimeResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PrimeResponse.tStart = t;  // (not accounting for frame time here)
      PrimeResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { PrimeResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { PrimeResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { PrimeResponse.clearEvents(); });
    }
    frameRemains = 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if ((PrimeResponse.status === PsychoJS.Status.STARTED || PrimeResponse.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      // keep track of stop time/frame for later
      PrimeResponse.tStop = t;  // not accounting for scr refresh
      PrimeResponse.frameNStop = frameN;  // exact frame index
      // update status
      PrimeResponse.status = PsychoJS.Status.FINISHED;
      frameRemains = 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if ((PrimeResponse.status === PsychoJS.Status.STARTED || PrimeResponse.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
        // keep track of stop time/frame for later
        PrimeResponse.tStop = t;  // not accounting for scr refresh
        PrimeResponse.frameNStop = frameN;  // exact frame index
        // update status
        PrimeResponse.status = PsychoJS.Status.FINISHED;
        PrimeResponse.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if PrimeResponse is active this frame...
      if (PrimeResponse.status === PsychoJS.Status.STARTED) {
        let theseKeys = PrimeResponse.getKeys({
          keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
          waitRelease: false
        });
        _PrimeResponse_allKeys = _PrimeResponse_allKeys.concat(theseKeys);
        if (_PrimeResponse_allKeys.length > 0) {
          PrimeResponse.keys = _PrimeResponse_allKeys[0].name;  // just the first key pressed
          PrimeResponse.rt = _PrimeResponse_allKeys[0].rt;
          PrimeResponse.duration = _PrimeResponse_allKeys[0].duration;
        }
      }
      
      
      // *Blank* updates
      if (t >= 1.5 && Blank.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Blank.tStart = t;  // (not accounting for frame time here)
        Blank.frameNStart = frameN;  // exact frame index
        
        Blank.setAutoDraw(true);
      }
      
      
      // if Blank is active this frame...
      if (Blank.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if ((Blank.status === PsychoJS.Status.STARTED || Blank.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
        // keep track of stop time/frame for later
        Blank.tStop = t;  // not accounting for scr refresh
        Blank.frameNStop = frameN;  // exact frame index
        // update status
        Blank.status = PsychoJS.Status.FINISHED;
        Blank.setAutoDraw(false);
      }
      
      
      // *Probe* updates
      if (t >= 2.0 && Probe.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Probe.tStart = t;  // (not accounting for frame time here)
        Probe.frameNStart = frameN;  // exact frame index
        
        Probe.setAutoDraw(true);
      }
      
      
      // if Probe is active this frame...
      if (Probe.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if ((Probe.status === PsychoJS.Status.STARTED || Probe.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
        // keep track of stop time/frame for later
        Probe.tStop = t;  // not accounting for scr refresh
        Probe.frameNStop = frameN;  // exact frame index
        // update status
        Probe.status = PsychoJS.Status.FINISHED;
        Probe.setAutoDraw(false);
      }
      
      
      // *ProbeResponse* updates
      if (t >= 2.0 && ProbeResponse.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        ProbeResponse.tStart = t;  // (not accounting for frame time here)
        ProbeResponse.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { ProbeResponse.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { ProbeResponse.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { ProbeResponse.clearEvents(); });
      }
      frameRemains = 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if ((ProbeResponse.status === PsychoJS.Status.STARTED || ProbeResponse.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
        // keep track of stop time/frame for later
        ProbeResponse.tStop = t;  // not accounting for scr refresh
        ProbeResponse.frameNStop = frameN;  // exact frame index
        // update status
        ProbeResponse.status = PsychoJS.Status.FINISHED;
        frameRemains = 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if ((ProbeResponse.status === PsychoJS.Status.STARTED || ProbeResponse.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
          // keep track of stop time/frame for later
          ProbeResponse.tStop = t;  // not accounting for scr refresh
          ProbeResponse.frameNStop = frameN;  // exact frame index
          // update status
          ProbeResponse.status = PsychoJS.Status.FINISHED;
          ProbeResponse.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if ProbeResponse is active this frame...
        if (ProbeResponse.status === PsychoJS.Status.STARTED) {
          let theseKeys = ProbeResponse.getKeys({
            keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
            waitRelease: false
          });
          _ProbeResponse_allKeys = _ProbeResponse_allKeys.concat(theseKeys);
          if (_ProbeResponse_allKeys.length > 0) {
            ProbeResponse.keys = _ProbeResponse_allKeys[0].name;  // just the first key pressed
            ProbeResponse.rt = _ProbeResponse_allKeys[0].rt;
            ProbeResponse.duration = _ProbeResponse_allKeys[0].duration;
            // was this correct?
            if (ProbeResponse.keys == corrAns) {
                ProbeResponse.corr = 1;
            } else {
                ProbeResponse.corr = 0;
            }
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of trialComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function trialRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'trial' ---
        for (const thisComponent of trialComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(PrimeResponse.corr, level);
        }
        psychoJS.experiment.addData('PrimeResponse.keys', PrimeResponse.keys);
        if (typeof PrimeResponse.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('PrimeResponse.rt', PrimeResponse.rt);
            psychoJS.experiment.addData('PrimeResponse.duration', PrimeResponse.duration);
            }
        
        PrimeResponse.stop();
        // was no response the correct answer?!
        if (ProbeResponse.keys === undefined) {
          if (['None','none',undefined].includes(corrAns)) {
             ProbeResponse.corr = 1;  // correct non-response
          } else {
             ProbeResponse.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(ProbeResponse.corr, level);
        }
        psychoJS.experiment.addData('ProbeResponse.keys', ProbeResponse.keys);
        psychoJS.experiment.addData('ProbeResponse.corr', ProbeResponse.corr);
        if (typeof ProbeResponse.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('ProbeResponse.rt', ProbeResponse.rt);
            psychoJS.experiment.addData('ProbeResponse.duration', ProbeResponse.duration);
            routineTimer.reset();
            }
        
        ProbeResponse.stop();
        if (routineForceEnded) {
            routineTimer.reset();} else if (trialMaxDurationReached) {
            trialClock.add(trialMaxDuration);
        } else {
            trialClock.add(3.500000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'End' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        EndClock.reset();
        routineTimer.reset();
        EndMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('End.started', globalClock.getTime());
        EndMaxDuration = null
        // keep track of which components have finished
        EndComponents = [];
        EndComponents.push(END);
        
        for (const thisComponent of EndComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function EndRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'End' ---
        // get current time
        t = EndClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *END* updates
        if (t >= 0.0 && END.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          END.tStart = t;  // (not accounting for frame time here)
          END.frameNStart = frameN;  // exact frame index
          
          END.setAutoDraw(true);
        }
        
        
        // if END is active this frame...
        if (END.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of EndComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function EndRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'End' ---
        for (const thisComponent of EndComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('End.stopped', globalClock.getTime());
        // the Routine "End" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
