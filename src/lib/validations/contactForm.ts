import { z } from 'zod';

const nigerianPhone = /^(\+234\d{10}|0\d{10})$/;

export const propertyTypes = ['Home', 'Office', 'Factory', 'Farm', 'Other'] as const;
export const appliances = [
  'AC',
  'Fridge',
  'TV',
  'Computers',
  'Borehole Pump',
  'Security System',
  'Other',
] as const;
export const contactMethods = ['Call', 'WhatsApp', 'Email'] as const;
export const bestTimes = ['Morning 8–12', 'Afternoon 12–5', 'Evening 5–8'] as const;

export const stepOneSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .regex(nigerianPhone, 'Enter a valid Nigerian number (e.g. 0810 234 5678 or +234 810 234 5678)'),
  propertyType: z.enum(propertyTypes, { error: 'Select a property type' }),
  address: z.string().trim().min(5, 'Please enter your property address or area in Lagos'),
});

export const stepTwoSchema = z.object({
  monthlyBill: z.coerce.number().min(0, 'Enter your average monthly bill'),
  monthlyGeneratorCost: z.coerce.number().min(0, 'Enter your average monthly fuel cost'),
  powerSupplyHours: z.coerce.number().min(0).max(24),
  appliances: z.array(z.enum(appliances)).min(1, 'Select at least one appliance'),
  hasBattery: z.boolean(),
});

export const stepThreeSchema = z.object({
  contactMethod: z.enum(contactMethods, { error: 'Select a preferred contact method' }),
  bestTime: z.enum(bestTimes, { error: 'Select the best time to reach you' }),
  notes: z.string().max(500, 'Keep additional notes under 500 characters').optional(),
  consent: z
    .boolean()
    .refine((value) => value === true, { error: 'You must agree to be contacted to submit this form' }),
});

export const contactFormSchema = z.object({
  ...stepOneSchema.shape,
  ...stepTwoSchema.shape,
  ...stepThreeSchema.shape,
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormValues = z.output<typeof contactFormSchema>;

export const STEP_FIELDS: Record<number, (keyof ContactFormInput)[]> = {
  0: ['name', 'email', 'phone', 'propertyType', 'address'],
  1: ['monthlyBill', 'monthlyGeneratorCost', 'powerSupplyHours', 'appliances', 'hasBattery'],
  2: ['contactMethod', 'bestTime', 'notes', 'consent'],
};

export const contactFormDefaults: ContactFormInput = {
  name: '',
  email: '',
  phone: '',
  propertyType: 'Home',
  address: '',
  monthlyBill: 0,
  monthlyGeneratorCost: 0,
  powerSupplyHours: 8,
  appliances: [],
  hasBattery: false,
  contactMethod: 'WhatsApp',
  bestTime: 'Morning 8–12',
  notes: '',
  consent: false,
};
