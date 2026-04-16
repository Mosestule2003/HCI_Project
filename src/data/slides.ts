// Slide data
// Icon keys reference the ICONS map in SlideElements.tsx (Lucide icons only).

export interface Slide {
  id: string;
  type: 'title' | 'content' | 'canvas' | 'model' | 'analysis';
  title: string;
  subtitle?: string;
  content?: SlideContent;
}

export interface SlideContent {
  badge?: string;
  question?: string;
  description?: string;
  bullets?: BulletItem[];
  twoCol?: { leftTitle?: string; rightTitle?: string; left: BulletItem[]; right: BulletItem[] };
  hypothesis?: string;
  figure?: Figure;
  pipeline?: PipelineStep[];
}

export interface BulletItem {
  icon: string;   // Lucide icon key
  text: string;
  sub?: string;
}

export interface Figure {
  label: string;
  src: string;
}

export interface PipelineStep {
  step: number;
  title: string;
  detail: string;
}

export const slides: Slide[] = [
  // 01
  {
    id: 'slide-title',
    type: 'title',
    title: 'Detecting KillAura, Flight and X Ray Cheats',
    subtitle: 'Using Input Behavior Analysis With Machine Learning',
  },

  // 02
  {
    id: 'slide-rq',
    type: 'content',
    title: 'Research Question',
    content: {
      badge: 'The Core Question',
      question: 'Can We Detect KillAura, Flight, and X Ray Cheats in Minecraft Java Edition: Using Keystroke & Mouse Behavioral Biometrics With Machine Learning',
      description: 'No server access. No packet inspection. No game modification. Detection relies entirely on client side input behavior.',
      bullets: [
        { icon: 'crosshair', text: 'KillAura',  sub: 'Auto attacks entities without aiming. Produces robotic click patterns.' },
        { icon: 'wind',      text: 'Flight',    sub: 'Moves through the air illegally. Causes uniform continuous key hold patterns.' },
        { icon: 'gem',       text: 'X Ray',     sub: 'Sees through blocks to find resources. Changes destination rather than input style.' },
      ],
    },
  },

  // 03
  {
    id: 'slide-hypothesis',
    type: 'content',
    title: 'Hypothesis',
    content: {
      badge: 'Research Hypothesis',
      hypothesis: 'Cheating in Minecraft introduces measurable irregularities in both keystroke timing and mouse movement patterns. By comparing behavioral patterns across multiple sessions, a machine learning model can identify consistent irregularities within short time windows to reliably detect automated cheating.',
      bullets: [
        { icon: 'activity', text: 'Measurable Irregularities', sub: 'Automated cheats distinctively alter raw input timing and trajectory.' },
        { icon: 'layers', text: 'Cross Session Comparison', sub: 'Comparing suspected sessions against natural human baselines reveals deviations.' },
        { icon: 'clock', text: 'Short Time Windows', sub: 'Detection relies on identifying localized anomalies within dense behavioral data streams.' },
      ]
    },
  },

  // 04
  {
    id: 'slide-dataset',
    type: 'content',
    title: 'Data Collection',
    content: {
      badge: 'Unfiltered Signals',
      description: 'Data was collected from 5 players, with 3 usable datasets due to capture issues. The system recorded high frequency raw events to measure both fine grained motion and precise input timing.',
      twoCol: {
        leftTitle: 'Mouse Logger',
        rightTitle: 'Keyboard Logger',
        left: [
          { icon: 'clock', text: 'Time Stamp' },
          { icon: 'activity', text: 'Event Type' },
          { icon: 'database', text: 'Event Info' },
        ],
        right: [
          { icon: 'clock', text: 'Time Stamp' },
          { icon: 'keyboard', text: 'Key Name' },
          { icon: 'activity', text: 'Event Type' },
          { icon: 'scan', text: 'Scan Code' },
        ],
      },
    },
  },

  // 05
  {
    id: 'slide-session',
    type: 'content',
    title: 'Session Structure',
    content: {
      badge: 'Data Organization',
      description: 'Each session was rigidly structured to capture specific playstyles and then divided into 5 second windows for feature extraction.',
      bullets: [
        { icon: 'flask', text: 'Test session', sub: '5 minutes of initial gameplay configuration' },
        { icon: 'clock', text: 'Baseline session', sub: '10 minutes of normal legitimate gameplay' },
        { icon: 'wind', text: 'Flight session', sub: '10 minutes with the Flight cheat active' },
        { icon: 'crosshair', text: 'KillAura session', sub: '10 minutes with the KillAura cheat active' },
        { icon: 'gem', text: 'X Ray session', sub: '10 minutes with the X Ray cheat active' },
      ],
    },
  },

  // 06
  {
    id: 'slide-model-logic',
    type: 'model',
    title: 'Model and Detection Logic',
    content: {
      badge: 'Machine Learning Pipeline',
      description: 'The model learns session level patterns and identifies irregularities within short time windows.',
      pipeline: [
        { step: 1, title: '5 Second Windows', detail: 'The model analyzes behavior in 5 second windows. Each window serves as an independent evaluation unit.' },
        { step: 2, title: 'Independent Probability', detail: 'Keyboard and mouse models independently output probabilities per window.' },
        { step: 3, title: 'Score Averaging', detail: 'These probabilities are averaged. A window is flagged suspicious if the combined probability exceeds 0.5.' },
        { step: 4, title: 'Session Flagging', detail: 'A session is ultimately flagged as cheating if more than 50 percent of its windows are marked suspicious.' },
      ],
    },
  },

  // 07
  {
    id: 'slide-features',
    type: 'content',
    title: 'Input Features',
    content: {
      badge: 'Feature Engineering',
      twoCol: {
        leftTitle: 'Keystroke Features',
        rightTitle: 'Mouse Features',
        left: [
          { icon: 'clock', text: 'mean dwell' },
          { icon: 'activity', text: 'variance dwell' },
          { icon: 'clock', text: 'mean flight' },
          { icon: 'activity', text: 'variance flight' },
          { icon: 'keyboard', text: 'dwell uniformity' },
          { icon: 'keyboard', text: 'flight uniformity' },
          { icon: 'zap', text: 'event density' },
        ],
        right: [
          { icon: 'mouse', text: 'path length' },
          { icon: 'target', text: 'straightness ratio' },
          { icon: 'zap', text: 'mean speed' },
          { icon: 'activity', text: 'max jerk' },
          { icon: 'crosshair', text: 'mean angle change' },
          { icon: 'activity', text: 'standard angle change' },
          { icon: 'target', text: 'heading stability' },
        ],
      },
    },
  },

  // 08
  {
    id: 'slide-cv-results',
    type: 'canvas',
    title: 'Results: Cross Validation Accuracy',
    content: {
      badge: 'Figure 1',
      figure: {
        label: 'Figure 1: Keyboard vs Mouse model accuracy',
        src: '/accuracy_comparison.png',
      },
    },
  },

  // 09
  {
    id: 'slide-session-results',
    type: 'canvas',
    title: 'Results: Session Level Detection',
    content: {
      badge: 'Figure 2',
      figure: {
        label: 'Figure 2: Suspicious window percentage per session',
        src: '/threshold_comparison.png',
      },
    },
  },

  // 10
  {
    id: 'slide-analysis',
    type: 'analysis',
    title: 'Analysis of Results',
    content: {
      twoCol: {
        left: [
          { icon: 'keyboard', text: 'Strong Keyboard Feature Performance' },
          { icon: 'crosshair', text: 'Reliable Detection of KillAura and Flight' },
          { icon: 'clock', text: 'Effective Window Based Detection' },
          { icon: 'bar', text: 'Session Level Classification Stability' },
          { icon: 'layers', text: 'Multimodal Learning Approach' },
        ],
        right: [
          { icon: 'mouse', text: 'Lower and Inconsistent Mouse Model Performance' },
          { icon: 'gem', text: 'Difficulty Detecting X Ray Behavior' },
          { icon: 'users', text: 'Limited Participant Dataset' },
          { icon: 'activity', text: 'High Variability in Human Input' },
          { icon: 'shield', text: 'Model Sensitivity Tradeoffs' },
        ],
      },
    },
  },

  // 11
  {
    id: 'slide-future',
    type: 'content',
    title: 'Future Work',
    content: {
      badge: 'Machine Learning Model Improvements',
      bullets: [
        { icon: 'users', text: 'Expand Dataset Size and Diversity', sub: 'Increase the number of participants and ensure higher quality data collection to improve generalization across different play styles and behaviors.' },
        { icon: 'userCheck', text: 'Model Personalization Per Player', sub: 'Train individualized models using each player\'s baseline behavior to improve detection accuracy by comparing against their own behavioral signature instead of a global model.' },
        { icon: 'network', text: 'Advanced Model Architectures', sub: 'Explore more complex models such as sequence based models or temporal learning approaches that can better capture patterns over time rather than isolated windows.' },
        { icon: 'layers', text: 'Feature Expansion and Refinement', sub: 'Introduce additional features that capture more nuanced behavioral patterns, especially for subtle cheats like X Ray that are not easily detectable with current features.' },
        { icon: 'sliders', text: 'Adaptive Thresholding', sub: 'Replace the fixed 0.5 threshold with dynamic thresholds that adjust based on player behavior or session context to improve sensitivity without increasing false positives.' },
        { icon: 'cpu', text: 'Improved Multimodal Fusion', sub: 'Develop more advanced methods of combining keyboard and mouse outputs rather than simple averaging to better leverage the strengths of each modality.' },
        { icon: 'zap', text: 'Real Time Detection Capability', sub: 'Extend the system to operate in real time, allowing detection during live gameplay instead of post session analysis.' },
      ],
    },
  },

  // 12
  {
    id: 'slide-conclusion',
    type: 'content',
    title: 'Conclusion',
    content: {
      badge: 'Project Summary',
      bullets: [
        { icon: 'check', text: 'Reliable Input Signals', sub: 'Analyzed input behavior validates as a robust method for identifying automated cheating in Minecraft.' },
        { icon: 'keyboard', text: 'Keyboard Features Excel', sub: 'The strongest results were achieved when detecting constant timing anomalies in Flight and KillAura sessions.' },
        { icon: 'alert', text: 'Limitations Highlighted', sub: 'Current dataset size and subtle cheats like X Ray present significant detection challenges.' },
        { icon: 'flask', text: 'Foundation Established', sub: 'The approach clearly proves the concept while emphasizing the need for advanced temporal models to scale.' },
      ],
    },
  },

  // 13
  {
    id: 'slide-end',
    type: 'title',
    title: 'Thank You',
    subtitle: 'Timothy Britcliffe and Kpughur Tule Tertsegha Moses\nThompson Rivers University 2026',
  },
];
