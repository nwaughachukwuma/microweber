<?php

class SimplePie_Absolutize_Test_RFC3986_Normal_19 extends SimplePie_Absolutize_Test_RFC3986
{
	function data()
	{
		$this->data['relative'] = '../';
	}
	
	function expected()
	{
		$this->expected = 'http://a/b/';
	}
}

?>