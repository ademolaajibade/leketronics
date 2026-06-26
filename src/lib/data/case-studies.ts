import type { CaseStudy } from '@/types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: '5kW Residential Solar + Battery System',
    location: 'Lekki Phase 1, Lagos',
    type: 'residential',
    systemSize: '5kW',
    panelCount: 12,
    inverterBrand: 'Growatt 5kW Hybrid Inverter',
    batteryCapacity: '10.65kWh Pylontech Lithium',
    annualOutput: '6,200 kWh/year',
    co2Saved: '4.8 tonnes/year',
    billReduction: '82%',
    description:
      "This household was running a 7.5kVA generator for six to eight hours most nights, spending close to ₦95,000 a month on diesel even with grid power factored in. We installed 12 Jinko Tiger Neo panels paired with a Growatt hybrid inverter and a Pylontech lithium battery sized to carry the home through a full evening of EKEDC outages. Eight months after commissioning, the generator has not been started once.",
  },
  {
    id: 'cs2',
    title: '6.5kW Residential Solar System',
    location: 'Gbagada Phase 2, Lagos',
    type: 'residential',
    systemSize: '6.5kW',
    panelCount: 16,
    inverterBrand: 'Felicity Solar 6.2kW Hybrid Inverter',
    batteryCapacity: '14kWh Dyness Lithium',
    annualOutput: '8,100 kWh/year',
    co2Saved: '6.1 tonnes/year',
    billReduction: '88%',
    description:
      "A family running a small fashion design business from their Gbagada Phase 2 home needed power that wouldn't cut out mid-stitch every time EKEDC dropped supply. The 6.5kW system uses 16 LONGi Hi-MO panels, a Felicity Solar hybrid inverter and a Dyness lithium battery bank, sized to keep three industrial sewing machines, an AC unit and lighting running through the workday regardless of grid status. Their monthly diesel spend, previously around ₦110,000, is now occasional and minor.",
  },
  {
    id: 'cs3',
    title: '50kW Commercial Solar Installation',
    location: 'Apapa, Lagos',
    type: 'commercial',
    systemSize: '50kW',
    panelCount: 110,
    inverterBrand: 'Sungrow SG50CX Three-Phase Inverter',
    batteryCapacity: '100kWh BYD Lithium Battery Bank',
    annualOutput: '78,000 kWh/year',
    co2Saved: '58 tonnes/year',
    billReduction: '64%',
    description:
      "A packaging factory in Apapa was running two large diesel generators in rotation for up to 14 hours a day to keep production lines moving, a cost that had grown past ₦2.3 million a month in fuel and maintenance. We designed a 50kW system using 110 Canadian Solar panels, a Sungrow three-phase inverter and a 100kWh BYD battery bank to cover daytime production load and part of the evening shift. The factory now runs its generators only as backup, cutting diesel spend by close to two-thirds.",
  },
  {
    id: 'cs4',
    title: 'Off-Grid Solar System for a Poultry & Crop Farm',
    location: 'Ado-Odo/Ota, Ogun State',
    type: 'off-grid',
    systemSize: '15kW Off-Grid',
    panelCount: 36,
    inverterBrand: 'Victron Energy Quattro 48/15000',
    batteryCapacity: '48kWh Pylontech Lithium',
    annualOutput: '21,000 kWh/year',
    co2Saved: '16 tonnes/year',
    billReduction: '100%',
    description:
      "A poultry and crop farm just across the Lagos border had no grid connection at all and depended entirely on diesel to run brooding lamps, incubators and a borehole pump — any delay in fuel delivery put thousands of day-old chicks at risk. The 15kW off-grid system combines 36 Canadian Solar panels, a Victron Energy inverter-charger and a 48kWh Pylontech battery bank sized for three cloudy days of autonomy. The farm has run entirely off solar since commissioning, with the generator kept only as emergency backup.",
  },
];
