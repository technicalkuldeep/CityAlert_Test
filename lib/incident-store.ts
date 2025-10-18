type Incident = {
  incident_id: string;
  pincode: string;
  category: string;
  description: string;
  reporter: string;
  timestamp: string;
};

const subscribers: ((incident: Incident) => void)[] = [];
let incidents: Incident[] = [];

export function getIncidents() {
  return incidents;
}

export function addIncident(newIncident: Incident) {
  incidents = [newIncident, ...incidents];
  subscribers.forEach((fn) => fn(newIncident));
}

export function subscribe(fn: (incident: Incident) => void) {
  subscribers.push(fn);
  return () => {
    const index = subscribers.indexOf(fn);
    if (index !== -1) subscribers.splice(index, 1);
  };
}
