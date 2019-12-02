<?php

function test($firstDate, $secondDate, $dayOfWeek) {
	$firstDateParsed = date_parse( $firstDate );
	$secondDateParsed = date_parse( $secondDate );

	$dates = new DatePeriod(
		new DateTime($firstDateParsed['year'] . '-' . $firstDateParsed['month'] . '-' . $firstDateParsed['day']),
		new DateInterval('P1D'),
		new DateTime($secondDateParsed['year'] . '-' . $secondDateParsed['month'] . '-' . $secondDateParsed['day'])
	);

    foreach( $dates as $date ) {
    	if ( date( 'l', $date->getTimestamp() ) === $dayOfWeek ) {
		    $response = json_decode( file_get_contents( sprintf(
		    	'https://jsonmock.hackerrank.com/api/stocks/?date=%s-%s-%s',
			    date( 'd', $date->getTimestamp() ),
			    date( 'F', $date->getTimestamp() ),
			    date( 'Y', $date->getTimestamp() ) ) ) );

		    if ( isset( $response->data ) && $response->data ) {
		    	echo sprintf(
		    		'%s %s %s',
				    $response->data[0]->date,
				    $response->data[0]->open,
				    $response->data[0]->close
			    );

			    echo PHP_EOL;
		    }

	    }
    }
}

//test( '1-January-2000', '22-February-2000', 'Monday' );

function angryAnimals( $n, $a, $b ) {
	$animals = [];
	$enemies = [];
	$groups  = [];

	foreach ( $a as $key => $value ) {
		$enemies[ $value ] = $b[ $key ];
	}

	for ( $i = 1; $i <= $n; $i ++ ) {
		$animals[] = $i;
	}

	for ( $i = 0; $i < $n; $i ++ ) {
		for ( $j = 0; $j <= $n - $i; $j ++ ) {
			$res = array_slice( $animals, $i, $j);

			if ( $res ) {
				$groups[] = $res;
			}
		}
	}

	foreach ( $groups as $j => $group ) {
		foreach ( $enemies as $k => $enemy ) {
			if ( in_array( $k, $group, true ) && in_array( $enemy, $group, true ) ) {
				unset( $groups[ $j ] );
			}
		}
	}

	return count( $groups );
}

angryAnimals( 5, [1, 3, 4], [3, 1, 1] );

function largestMatrix( $arr ) {
	$largestMatrix  = 0;
	$cache = [];

	foreach( $arr as $lineK => $line ) {
		foreach( $line as $colK => $value ) {
			if ( $lineK === 0 || $colK === 0 ) {
				$result = $value;
			} elseif ( $value === 0 ) {
				$result = 0;
			} else {
				$borders = [
					$cache[ $lineK ][ $colK - 1 ],
					$cache[ $lineK - 1 ][ $colK - 1 ],
					$cache[ $lineK - 1 ][ $colK ],
				];

				sort( $borders );

				$result = $borders[0] + $value;
			}

			$cache[ $lineK ][ $colK ] = $result;

			if ( $result > $largestMatrix ) {
				$largestMatrix = $result;
			}
		}
	}

	return $largestMatrix;
}

assert( 1 === largestMatrix(
	        [
		        [0, 1, 1],
		        [1, 1, 0],
		        [1, 0, 1],
	        ]
        ) );

exit();

assert( 3 === largestMatrix(
	        [
		        [1, 1, 1],
		        [1, 1, 1],
		        [1, 1, 1],
	        ]
        ) );

assert( 4 === largestMatrix(
	        [
		        [1, 0, 1, 1, 1],
		        [0, 1, 1, 1, 1],
		        [1, 1, 1, 1, 1],
		        [1, 1, 1, 1, 1],
		        [0, 1, 1, 1, 1],
	        ]
        ) );

assert( 2 === largestMatrix(
	        [
		        [1, 1, 0],
		        [1, 1, 0],
		        [0, 0, 0],
	        ]
        ) );

assert( 0 === largestMatrix(
	[
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]
) );



assert( 3 === largestMatrix(
	        [
		        [1, 1, 1],
		        [1, 1, 1],
		        [1, 1, 1],
	        ]
        ) );