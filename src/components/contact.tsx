'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  regid: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      regid: '',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data captured:', data);
    setStatusMessage('Message captured locally. Check the browser console!');
    form.reset();
    setTimeout(() => {
      setStatusMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-stone-900 text-stone-300">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl [font-size:clamp(2rem,4vw,2.75rem)]">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-stone-400">
            Have a question or want to work together? Leave a message.
          </p>
        </div>

        <Card className="mt-12 bg-stone-800 border-stone-700">
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-300">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-stone-900 border-stone-600 text-white focus-visible:ring-offset-stone-900" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-300">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-stone-900 border-stone-600 text-white focus-visible:ring-offset-stone-900" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                    control={form.control}
                    name="regid"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-300">Registration ID (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your ID" {...field} className="bg-stone-900 border-stone-600 text-white focus-visible:ring-offset-stone-900" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-stone-300">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} className="bg-stone-900 border-stone-600 text-white min-h-[120px] focus-visible:ring-offset-stone-900" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col items-center">
                    <Button type="submit" size="lg" className="w-full sm:w-auto hover:bg-primary-600 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md">Send Message</Button>
                    {statusMessage && (
                        <p className="mt-4 text-sm text-green-400" aria-live="polite">
                        {statusMessage}
                        </p>
                    )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
