export async function POST(request) {
  // Get data submitted in request's form.
  const form = await request.formData();
  const formData = Object.fromEntries(form.entries());

  // Optional logging to see the responses in the command line where the
  // Next.js app is running.
  console.log(formData);

  // Guard clause checks for email and returns early if it is not found.
  if (!formData.name || !formData.email || !formData.message) {
    // Sends a HTTP bad request error code.
    return new Response(
      "One or more of the following not found: name, email, message",
      {
        status: 400,
      },
    );
  }
  // Here, you could send the message to a service like Supabase to read later.
  //
  // This is just an example, so we won't do anything except redirect back to
  // the homepage.
  return new Response("Homepage redirect", {
    status: 302,
    headers: { Location: "/" },
  });
}
