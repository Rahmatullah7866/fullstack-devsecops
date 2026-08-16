from behave import when, then

@when('I request the API endpoint "{endpoint}"')
def step_impl(context, endpoint):
    context.response = context.test.client.get(endpoint)

@then('the response status code should be {status_code:d}')
def step_imp(context, status_code):
    assert context.response.status_code == status_code