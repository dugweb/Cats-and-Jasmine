<?php

namespace spec;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class cardSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType('card');
    }

    function it_should_return_a_string() {
    	$this->judist()->shouldBeString();
    }

    function should_throw_an_error() {

    	$this->whatthefetch()->shouldReturn("dude, seriuosly");
    }
}
